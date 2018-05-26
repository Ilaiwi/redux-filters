export const FEATURES = 'features';
export const HDR = 'hdr';
export const DUAL_CAMERA = 'dualCamera';
export const TOUCH_FOCUS = 'touchFocus';
export const WATER_PROOF = 'waterProof';

export const FEATURES_FILTER_CATEGORY = {
  category: FEATURES,
  disjunctive: false
}

export const WATER_PROOF_FILTER = {
  category: FEATURES,
  id: WATER_PROOF,
  filterId: WATER_PROOF,
  predicate: `isWaterProof`
}

export const HDR_FILTER = {
  category: FEATURES,
  id: HDR,
  filterId: HDR,
  predicate: `contains(features, "HDR")`
}

export const DUAL_CAMERA_FILTER = {
  category: FEATURES,
  id: DUAL_CAMERA,
  filterId: DUAL_CAMERA,
  predicate: `contains(features, "Dual cameras")`
}

export const TOUCH_FOCUS_FILTER = {
  category: FEATURES,
  id: TOUCH_FOCUS,
  filterId: TOUCH_FOCUS,
  predicate: `contains(features, "touch focus")`
}