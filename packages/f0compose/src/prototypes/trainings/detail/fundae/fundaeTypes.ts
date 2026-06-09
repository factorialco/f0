// FUNDAE catalogues (closed enums managed by the State Foundation)
// In production these would come from a backend seed or constant module.

// Group modality per FUNDAE XSD: jornadaPresencial / distanciaTeleformacion / mixta
export type Modalidad = "presencial" | "teleformacion" | "mixta"

// Tipo de documento del centro proveedor (perfil bonificada): NIF/Pasaporte/NIE
// XSD values: 10 (NIF), 20 (Pasaporte), 60 (NIE).
export type TipoDocumentoCentro = "10" | "20" | "60"

export type DiasImparticion = {
  L: boolean
  M: boolean
  X: boolean
  J: boolean
  V: boolean
  S: boolean
  D: boolean
}

export type CategoriaProfesional =
  | "directivo"
  | "mando_intermedio"
  | "tecnico"
  | "trabajador_cualificado"
  | "trabajador_no_cualificado"

export type NivelEstudios =
  | "sin_estudios"
  | "estudios_primarios"
  | "eso_fp_basica"
  | "bachillerato_fp_grado_medio"
  | "fp_grado_superior"
  | "grado"
  | "master"
  | "doctorado"

export type GrupoCotizacion =
  | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11"

export type TipoContrato =
  | "indefinido_tc"
  | "indefinido_tp"
  | "temporal_tc"
  | "temporal_tp"
  | "formacion"
  | "practicas"
  | "fijo_discontinuo"

// ─── XSD-compliant types (perfil "bonificada") ────────────────────────────

// t_centro_presencial: centro proveedor (para modalidad presencial)
// Para perfil bonificada usa tipoDocumentoCentro + documentoCentro (no CIF).
export type CentroProveedor = {
  tipoDocumentoCentro: TipoDocumentoCentro
  documentoCentro: string // NIF/NIE/Passport according to tipoDocumentoCentro
  nombreCentro: string
  direccionDetallada: string
  codPostal: string
  localidad: string
}

// t_lugarImparticion: dónde se imparte (puede diferir del centro proveedor)
export type LugarImparticion = {
  cif?: string // optional
  nombreCentro: string
  direccionDetallada: string
  codPostal: string
  localidad: string
  pais?: string
}

// t_horario: horas totales, días, tramos opcionales
export type Horario = {
  horaTotales: number | null
  horaInicioTramo1?: string // "HH:MM"
  horaFinTramo1?: string
  horaInicioTramo2?: string
  horaFinTramo2?: string
  dias: DiasImparticion
}

// t_Tutor: para modalidad presencial / mixta
export type Tutor = {
  id: string
  numeroHoras: number | null
  tipoDocumento: TipoDocumentoCentro // 10/20/60
  documento: string
  nombre: string
  apellido1: string
  apellido2: string
  telefono: string
  correoElectronico: string
}

// ─── Inicio group data — perfil bonificada (XSD `grupos`) ─────────────────

export type InicioGrupoData = {
  // ── Header data (group level) ──
  idAccion: string // 5-digit code; from acción formativa
  idGrupo: string // 5-digit code
  descripcion: string // max 100 chars
  numeroParticipantes: number | null // max 4 digits
  fechaInicio: string // DD/MM/AAAA
  fechaFin: string // DD/MM/AAAA
  responsable: string // max 100 chars
  telefonoContacto: string // 9-12 digits

  // ── Modality (one or both must be present) ──
  modalidad: Modalidad

  // ── Presencial / mixta block ──
  centro: CentroProveedor
  lugarImparticion: LugarImparticion
  lugarMismoQueCentro: boolean // UI helper to skip lugarImparticion fields
  horario: Horario
  // calendario[]: list of impartición dates — left for later iteration
  tutores: Tutor[]

  // ── Teleformación / mixta block ──
  asistenciaTeleformacion?: {
    centro: CentroProveedor
    telefono: string
  }
  // tutores de teleformación se reusan en `tutores` cuando modalidad lo requiere

  // ── Aula virtual (opcional) ──
  // aulaVirtual?: { ... } // dejado para luego

  // ── Observaciones ──
  observaciones?: string // max 4000
}

export type FinGrupoData = {
  fechaFinReal: string
  costesDirectos: string
  costesIndirectos: string
  costesSalariales: string
}

export type GroupStatus =
  | "pending_inicio"
  | "comunicado_inicio"
  | "comunicado_fin"

// ── Options for selects ──────────────────────────────────────────────────

type Option = { value: string; label: string }

// FUNDAE profile (perfil) — chosen when the acción formativa is created.
// Determines which XSD is used for inicio/fin and which fields apply.
//
// - bonificada:   the company trains its own employees, uses NIF/NIE/Passport
//                 for the centro proveedor.
// - organizadora: the company organises training for other companies; uses
//                 CIF for centres and adds EmpresasParticipantes.
// - grupo_empresas: same shape as organizadora but at group-of-companies level.
//
// Bonificada is the default because it's the only XSD currently supported
// for finalisation in Factorial.
export type PerfilFundae = "bonificada" | "organizadora" | "grupo_empresas"

export const PERFIL_OPTIONS: Option[] = [
  { value: "bonificada", label: "Empresa bonificada" },
  { value: "organizadora", label: "Entidad organizadora" },
  { value: "grupo_empresas", label: "Grupo de empresas" },
]

export function perfilLabel(p: PerfilFundae): string {
  return PERFIL_OPTIONS.find((o) => o.value === p)?.label ?? p
}

export const MODALIDAD_OPTIONS: Option[] = [
  { value: "presencial", label: "Presencial" },
  { value: "teleformacion", label: "Teleformación" },
  { value: "mixta", label: "Mixta" },
]

// Tipo de documento del centro proveedor (perfil bonificada)
export const TIPO_DOCUMENTO_CENTRO_OPTIONS: Option[] = [
  { value: "10", label: "NIF" },
  { value: "20", label: "Pasaporte" },
  { value: "60", label: "NIE" },
]

export const CATEGORIA_PROF_OPTIONS: Option[] = [
  { value: "directivo", label: "Directivo" },
  { value: "mando_intermedio", label: "Mando intermedio" },
  { value: "tecnico", label: "Técnico" },
  { value: "trabajador_cualificado", label: "Trabajador cualificado" },
  { value: "trabajador_no_cualificado", label: "Trabajador no cualificado" },
]

export const NIVEL_ESTUDIOS_OPTIONS: Option[] = [
  { value: "sin_estudios", label: "Sin estudios" },
  { value: "estudios_primarios", label: "Estudios primarios" },
  { value: "eso_fp_basica", label: "ESO / FP Básica" },
  { value: "bachillerato_fp_grado_medio", label: "Bachillerato / FP grado medio" },
  { value: "fp_grado_superior", label: "FP grado superior" },
  { value: "grado", label: "Grado / Diplomatura" },
  { value: "master", label: "Máster" },
  { value: "doctorado", label: "Doctorado" },
]

// ── Validators ───────────────────────────────────────────────────────────

export function validateCodigo(value: string): boolean {
  return /^\d{1,5}$/.test(value)
}

export function validateCif(value: string): boolean {
  return /^[A-Z]\d{7}[0-9A-J]$/.test(value.trim().toUpperCase())
}

export function validateNif(value: string): boolean {
  // FUNDAE t_nif: 9 chars, first is letter [XYZKLM] or digit, 7 digits, last letter
  return /^[XYZKLM\d]\d{7}[A-Z]$/.test(value.trim().toUpperCase())
}

export function validateCp(value: string): boolean {
  return /^\d{5}$/.test(value)
}

// 9-12 digits per FUNDAE t_telefono
export function validateTelefono(value: string): boolean {
  return /^\d{9,12}$/.test(value)
}

export function validateEmail(value: string): boolean {
  return /^[A-Za-z0-9_]+([-+.'][A-Za-z0-9_]+)*@[A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*\.[A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*$/.test(
    value
  )
}

// 9-15 chars per FUNDAE t_documento (covers NIF/NIE/passport)
export function validateDocumento(value: string): boolean {
  return value.length >= 9 && value.length <= 15
}
