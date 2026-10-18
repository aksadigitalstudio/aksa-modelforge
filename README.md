# AKSA ModelForge

A functional, local-first 3D modeling workspace for product design, packaging concepts, furniture prototypes and basic hard-surface modeling. Configuration is centralized in `src/config.js`. The interface and built-in Field portable speaker study are fully bundled; no backend, login, model service or external visual assets are required.

## Run

Use Node 22.18 or newer.

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:4400`. For production, run `npm run build`, then `npm run preview`. Deploy `dist/` to static hosting; a Vercel configuration is included. The optional `.openai/hosting.json` identifies the private Sites deployment, independently of Vercel.

## Workflow

Choose **New project**, **Open project**, or **Try the Field speaker concept**. Create any of eight primitives. Click the viewport or scene hierarchy to select; Shift-click adds to the selection. Alt-click selects a mesh inside a group. Use **G**, **R**, **S** for move, rotate and scale gizmos; drag their colored axes. Exact position, rotation, scale, dimensions and primitive geometry parameters are editable in the inspector. **V** returns to selection. **F** frames the selection; **Home** frames all visible geometry.

**Shift+D** duplicates; **Ctrl/Cmd+G** groups; **Delete** deletes; **Ctrl/Cmd+Z** undoes; **Ctrl/Cmd+Shift+Z** or **Ctrl/Cmd+Y** redoes. Shortcuts are inactive while typing. Undo history is bounded to 40 actions. Dimensions follow local object axes before rotation. Print prep shows the world-axis bounding envelope. Use **M**, then click two model surface points for distance measurement.

Select two closed mesh objects and use **Combine → Union / Subtract / Intersect**. Selection order defines subtraction: first selected is the base, second is the cutting tool. Successful operations replace the source objects with a result mesh; Undo restores the primitives. Groups and planes are not boolean operands. Empty results leave the original scene intact. CSG is for concept modeling and does not certify a manifold or watertight printable solid. Non-uniformly scaled assemblies with rotated children must have uniform scale restored before ungrouping, because arbitrary shear cannot be represented by ordinary position/rotation/scale fields.

Grid snap, rotation snap, environment and display units are configurable. The visible grid adapts to zoom and units. All geometry is stored internally in millimeters. Changing display units never resizes a model. Grid snap is in world coordinates. Scale snap uses increments of 0.1.

## Projects and recovery

**Save project** downloads a native `.modelforge.json` file, preserving primitive parameters, mesh geometry, hierarchy, transforms, materials, units and workspace settings. **Open project** re-imports the editable file. An imported file is never silently overwritten. Unsaved changes prompt before replacing the workspace. Metadata includes project name, creation and update times. IndexedDB keeps one debounced recovery copy per browser and origin; **Restore local recovery** appears on the next start. Download files for durable backups; clearing browser data removes local recovery.

## Real import and export

- **Binary STL:** actual triangles including world transforms, measured in millimeters; no material appearance. Set slicer units to mm.
- **OBJ:** actual geometry including world transforms, measured in millimeters. No MTL file or material claim.
- **GLB:** binary glTF with compatible PBR color, roughness, metalness and opacity. Geometry is converted to meters for the GLB specification; importing converts back to millimeters.
- **Native JSON:** editable project state, rather than flattened export geometry.

Export selected objects or all visible scene meshes. Hidden objects and helper geometry are excluded. Overlapping separate meshes remain separate unless explicitly unioned. Dimensions are shown before exporting. No professional printability, wall-thickness or manifold validation is claimed; check the output in a slicer.

Import STL, OBJ, self-contained GLB and embedded GLTF. Static mesh geometry and compatible basic materials become selectable, transformable and exportable objects. External resource references, animation and rigging are rejected; texture maps and multi-material slots are not imported. Use self-contained static assets and preview links for unsupported formats. The importer caps files at 25 MB, scene objects at 160 and imported mesh vertices at 900,000. Invalid data is rejected without replacing the current scene.

## Verification

```sh
npm test
npm run build
npm run test:browser
```

Core tests generate every primitive, test dimensions, units, grouping, actual boolean geometry, native project round trips, validation and bounded undo/redo. Browser tests use installed Google Chrome and their own localhost server, exercising actual UI controls, a real gizmo drag, materials, snapping, all cameras, grouping, all booleans, measurement, save/reopen, binary STL, OBJ and GLB generation, independent file parsing, model re-import, recovery, GPU geometry disposal and responsive inspection. Generated artifacts and reports are in `test-artifacts/` (ignored by Git).

Some managed desktop environments cancel native operating-system downloads even for a minimal JSON file. When that happens, the test records this delivery limitation and retrieves the exact generated download Blob to write and independently inspect the file bytes. This fallback does not alter the application or replace real export generation. Test reports distinguish this limitation from application errors.

The desktop workspace is the primary editing experience. Compact layouts provide scene/property drawers and viewing; a phone is not a precision CAD workstation. Three.js renderer resources, replaced geometry, materials, selection helpers and measurement objects are disposed appropriately. Geometry is a practical concept tool, not a parametric engineering CAD kernel.
