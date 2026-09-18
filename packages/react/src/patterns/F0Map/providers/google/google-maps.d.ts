// The package's tsconfig pins an explicit `types` array, so the ambient
// `google.maps` namespace is not picked up automatically. Referenced here
// rather than added to that array, to keep it scoped to this provider.
/// <reference types="google.maps" />
