# Photo header workflow: character first, then background

`components/PostArt.tsx` renders every blog header. It currently falls back to a
dark gradient band with a line icon (`artIcon`) because image-generation credits ran
out (see the "Add graphic post headers" commit). The component now also accepts an
optional `photo` prop/field so real photo headers can replace the icon treatment
post-by-post, whenever credits are available — this doc is the repeatable process
for producing those photos.

The technique (seen in a Higgsfield workflow video): don't generate one photo of
"a removalist in front of a truck" and hope the model nails both the subject and the
scene in one shot. Generate the **character** and the **background** as two separate,
purpose-built images, then composite them. Each stage is easier to get right on its
own, and the character becomes reusable across multiple headers.

## Steps (using the `higgs` MCP tools)

1. **Generate the character**, isolated so it cuts out cleanly.
   - Model: `soul_cast` (one-off) or `soul_2` with a trained `soul_id` if you want the
     same person across every post (train once via `show_characters(action:'train')`
     with 5-20 reference photos, then reuse the `soul_id`).
   - Prompt for a plain/seamless background (studio grey, white, etc.) and describe
     wardrobe, pose, and framing explicitly — that's most of the quality.
   - Example: *"Friendly professional Australian [gender] furniture removalist,
     mid-30s, navy blue polo shirt, holding a moving box against their hip,
     three-quarter body shot, photorealistic, studio photography, plain light grey
     seamless background, soft even lighting"*.

2. **Cut the character out** with `remove_background` (`media_type: "image"`,
   `media_id`: the character job's id) if the composite step needs a clean cutout
   rather than letting the next model re-key the background itself.

3. **Generate the background** as its own scene — no people in it, with open space
   left where the character will stand (call this out in the prompt, e.g. "empty
   foreground on the left for a person to stand").
   - Corridor-specific prompts read better than generic ones: Pacific Motorway /
     M1 at golden hour, a Brisbane Queenslander, a Gold Coast highrise driveway, etc.

4. **Composite**: `generate_image` with `model: "nano_banana_pro"`, passing both the
   character cutout and the background as `medias` (`role: "image"` for each), and a
   prompt telling the model to place the character into that scene naturally —
   matching perspective, lighting direction, and scale. This is the "place the
   character on the background" step from the video; letting a composition-capable
   model do the blend gives better lighting/shadow consistency than manual pasting.

5. **Save and wire it up**:
   - Download the result to `public/blog/headers/<post-slug>.jpg` (add the file to
     the repo — nothing reads from the Higgsfield CDN at runtime, the static export
     needs the bytes committed).
   - Set `photo: "/blog/headers/<post-slug>.jpg"` on that post's `BlogPost` entry in
     `content/posts.tsx`. Keep `artIcon` set too — it's the fallback for posts that
     don't have a photo yet, and costs nothing to leave in place.
   - Recommended source aspect ratio: 16:9. The header band is full-width at a fixed
     height (`h-40 sm:h-56`, i.e. ~160-224px tall) with `object-cover`, so anything
     wider than ~2:1 gets cropped hard on the sides.

## Notes

- Preflight cost with `generate_image(..., params: { get_cost: true })` before a
  batch run, and check `balance` first — this pipeline is designed to be run in
  short bursts whenever there's credit headroom, not as a one-time bulk job.
- If a network sandbox can't reach the Higgsfield CDN to download results (policy
  egress restrictions do occur in some Claude Code environments), generate the
  images from a session/environment that can, then commit the files — the
  `photo` field and `PostArt` rendering work is already in place and doesn't need
  to change.
