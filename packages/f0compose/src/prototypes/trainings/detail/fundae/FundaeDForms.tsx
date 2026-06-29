import { Children } from "react"
import { F0Alert, F0Box, F0Button, F0Heading, F0Select, F0Text } from "@factorialco/f0-react"
import { Add, Delete } from "@factorialco/f0-react/icons/app"
import { Input, NumberInput, Textarea } from "@factorialco/f0-react/dist/experimental"

import type { AccionFormativaState } from "./AccionFormativaCard"
import {
  MODALIDAD_OPTIONS,
  PERFIL_OPTIONS,
  TIPO_DOCUMENTO_CENTRO_OPTIONS,
  modalidadTienePresencial,
  modalidadTieneOnline,
  validateCp,
  validateEmail,
  validateNif,
  validateTelefono,
  type FinGrupoData,
  type InicioGrupoData,
  type Modalidad,
  type PerfilFundae,
  type TipoDocumentoCentro,
  type Tutor,
} from "./fundaeTypes"

// ─────────────────────────────────────────────────────────────────────────
// Forms PLANOS propios de la variante D.
//
// No reutilizan AccionFormativaCard/InicioSection/FinSection (congelados, son
// del layout en tab y anidan F0Cards → "cajas dentro de cajas"). Aquí el panel
// renderiza el form directo: heading de sección (F0Heading h3) + campos f0, sin
// tarjetas. Misma idea que el panel de contenido de policies. Reutilizan solo
// la capa de datos (tipos/opciones/validadores), que no es visual.
// ─────────────────────────────────────────────────────────────────────────

/**
 * Bloque de sección plano: título + descripción opcional + contenido. Sin
 * F0Card. El título y la descripción forman una cabecera con su propio ritmo
 * (xs) y van separados del cuerpo de campos (lg) para que respire — patrón de
 * los formularios de settings/Talent Plan.
 */
export function DSection({
  title,
  description,
  children,
}: {
  title?: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      {(title || description) && (
        <F0Box display="flex" flexDirection="column" gap="sm">
          {title ? (
            <F0Heading variant="heading" as="h3" content={title} />
          ) : null}
          {description ? (
            <F0Text variant="description" content={description} />
          ) : null}
        </F0Box>
      )}
      <F0Box display="flex" flexDirection="column" gap="lg">
        {children}
      </F0Box>
    </F0Box>
  )
}

/**
 * Apila secciones (DSection) separadas por un divisor sutil con respiración
 * generosa a cada lado. Es lo que da jerarquía a un form largo de varias
 * secciones sin meter cajas (patrón settings/Talent Plan). Filtra los hijos
 * falsy para que el divisor solo aparezca entre secciones reales (las
 * condicionales no dejan líneas huérfanas).
 */
function FormStack({ children }: { children: React.ReactNode }) {
  const sections = Children.toArray(children).filter(Boolean)
  return (
    // El form LLENA la columna de contenido (la de ~960 centrada de
    // FundaeFlowD), igual que la tabla → mismo borde izq./der., no se mezclan.
    // Los KV/valores quedan pegados al borde derecho de la columna (como Vercel).
    <div className="w-full">
      <F0Box display="flex" flexDirection="column" gap="none">
        {sections.map((section, i) => (
          <F0Box
            key={i}
            display="flex"
            flexDirection="column"
            paddingTop={i === 0 ? "none" : "2xl"}
            paddingBottom={i === sections.length - 1 ? "none" : "2xl"}
            {...(i === 0 ? {} : { borderTop: "default" })}
          >
            {section}
          </F0Box>
        ))}
      </F0Box>
    </div>
  )
}

/** Rejilla de 2 columnas para pares de campos. */
function Row({ children }: { children: React.ReactNode }) {
  return (
    <F0Box display="grid" columns="2" gap="lg">
      {children}
    </F0Box>
  )
}

// ── Acción formativa (paso 1) ──────────────────────────────────────────────

export function AccionFormativaForm({
  state,
  setState,
  showErrors,
}: {
  state: AccionFormativaState
  setState: (s: AccionFormativaState) => void
  showErrors: boolean
}) {
  const set = <K extends keyof AccionFormativaState>(
    k: K,
    v: AccionFormativaState[K]
  ) => setState({ ...state, [k]: v })

  const online = modalidadTieneOnline(state.modalidad)

  return (
    <FormStack>
      <DSection title="Datos de la acción formativa">
        <Input
          label="Denominación"
          required
          value={state.nombre}
          error={showErrors && !state.nombre ? "Obligatorio." : undefined}
          onChange={(v) => set("nombre", v ?? "")}
        />
        <Row>
          <Input
            label="Código FUNDAE"
            hint="5 dígitos · lo asigna FUNDAE"
            value={state.codigoFundae ?? ""}
            onChange={(v) => set("codigoFundae", v ? v : null)}
          />
          <NumberInput
            label="Horas totales"
            required
            locale="es-ES"
            value={state.horas}
            error={showErrors && !state.horas ? "Obligatorio." : undefined}
            onChange={(v) => set("horas", v)}
          />
        </Row>
        <Row>
          <F0Select
            label="Modalidad"
            required
            value={state.modalidad}
            options={MODALIDAD_OPTIONS}
            onChange={(v: string) => set("modalidad", v as Modalidad)}
          />
          <F0Select
            label="Perfil FUNDAE"
            required
            value={state.perfil}
            options={PERFIL_OPTIONS}
            onChange={(v: string) => set("perfil", v as PerfilFundae)}
          />
        </Row>
        <Textarea
          label="Objetivos"
          required
          rows={3}
          value={state.objetivos}
          error={showErrors && !state.objetivos ? "Obligatorio." : undefined}
          onChange={(v) => set("objetivos", v ?? "")}
        />
        <Textarea
          label="Contenidos"
          required
          rows={3}
          value={state.contenidos}
          error={showErrors && !state.contenidos ? "Obligatorio." : undefined}
          onChange={(v) => set("contenidos", v ?? "")}
        />
      </DSection>

      {online && (
        <DSection title="Plataforma de teleformación">
          <Row>
            <Input
              label="CIF de la plataforma"
              value={state.plataforma.cif}
              onChange={(v) =>
                set("plataforma", { ...state.plataforma, cif: v ?? "" })
              }
            />
            <Input
              label="Razón social"
              value={state.plataforma.razonSocial}
              onChange={(v) =>
                set("plataforma", { ...state.plataforma, razonSocial: v ?? "" })
              }
            />
          </Row>
          <Input
            label="URL de acceso"
            value={state.plataforma.url}
            onChange={(v) =>
              set("plataforma", { ...state.plataforma, url: v ?? "" })
            }
          />
          <Row>
            <Input
              label="Usuario de consulta"
              value={state.plataforma.usuario}
              onChange={(v) =>
                set("plataforma", { ...state.plataforma, usuario: v ?? "" })
              }
            />
            <Input
              label="Contraseña"
              value={state.plataforma.password}
              onChange={(v) =>
                set("plataforma", { ...state.plataforma, password: v ?? "" })
              }
            />
          </Row>
          <F0Text
            variant="description"
            content="Datos de la plataforma donde se imparte la teleformación, requeridos por FUNDAE."
          />
        </DSection>
      )}
    </FormStack>
  )
}

// ── Inicio del grupo (paso 2) ──────────────────────────────────────────────

const DIAS: { k: keyof InicioGrupoData["horario"]["dias"]; label: string }[] = [
  { k: "L", label: "L" },
  { k: "M", label: "M" },
  { k: "X", label: "X" },
  { k: "J", label: "J" },
  { k: "V", label: "V" },
  { k: "S", label: "S" },
  { k: "D", label: "D" },
]

export function InicioForm({
  data,
  setData,
  showErrors,
  plazoHint,
}: {
  data: InicioGrupoData
  setData: (u: InicioGrupoData | ((p: InicioGrupoData) => InicioGrupoData)) => void
  showErrors: boolean
  plazoHint?: string
}) {
  const set = <K extends keyof InicioGrupoData>(k: K, v: InicioGrupoData[K]) =>
    setData((p) => ({ ...p, [k]: v }))
  const setCentro = (patch: Partial<InicioGrupoData["centro"]>) =>
    setData((p) => ({ ...p, centro: { ...p.centro, ...patch } }))
  const setHorario = (patch: Partial<InicioGrupoData["horario"]>) =>
    setData((p) => ({ ...p, horario: { ...p.horario, ...patch } }))
  const patchTutor = (id: string, patch: Partial<Tutor>) =>
    setData((p) => ({
      ...p,
      tutores: p.tutores.map((t) => (t.id === id ? { ...t, ...patch } : t)),
    }))
  const removeTutor = (id: string) =>
    setData((p) => ({ ...p, tutores: p.tutores.filter((t) => t.id !== id) }))
  const addTutor = () =>
    setData((p) => ({
      ...p,
      tutores: [
        ...p.tutores,
        {
          id: `tutor-${p.tutores.length}-new`,
          numeroHoras: p.horario.horaTotales,
          tipoDocumento: "10",
          documento: "",
          nombre: "",
          apellido1: "",
          apellido2: "",
          telefono: "",
          correoElectronico: "",
        },
      ],
    }))

  const err = (cond: boolean) => (showErrors && cond ? "Obligatorio." : undefined)
  const presencial = modalidadTienePresencial(data.modalidad)

  return (
    <FormStack>
      <DSection title="Datos del grupo">
        {plazoHint ? (
          <F0Text variant="description" content={plazoHint} />
        ) : null}
        <Row>
          <Input
            label="Código de grupo"
            required
            value={data.idGrupo}
            error={err(!data.idGrupo)}
            onChange={(v) => set("idGrupo", v ?? "")}
          />
          <NumberInput
            label="Nº de participantes"
            required
            locale="es-ES"
            value={data.numeroParticipantes}
            error={err(!data.numeroParticipantes)}
            onChange={(v) => set("numeroParticipantes", v)}
          />
        </Row>
        <Input
          label="Descripción"
          required
          value={data.descripcion}
          error={err(!data.descripcion)}
          onChange={(v) => set("descripcion", v ?? "")}
        />
        <Row>
          <Input
            label="Fecha de inicio"
            required
            hint="DD/MM/AAAA"
            value={data.fechaInicio}
            error={err(!data.fechaInicio)}
            onChange={(v) => set("fechaInicio", v ?? "")}
          />
          <Input
            label="Fecha de fin prevista"
            required
            hint="DD/MM/AAAA"
            value={data.fechaFin}
            error={err(!data.fechaFin)}
            onChange={(v) => set("fechaFin", v ?? "")}
          />
        </Row>
        <Row>
          <Input
            label="Responsable"
            required
            value={data.responsable}
            error={err(!data.responsable)}
            onChange={(v) => set("responsable", v ?? "")}
          />
          <Input
            label="Teléfono de contacto"
            required
            value={data.telefonoContacto}
            error={
              showErrors && !validateTelefono(data.telefonoContacto)
                ? "9–12 dígitos."
                : undefined
            }
            onChange={(v) => set("telefonoContacto", v ?? "")}
          />
        </Row>
      </DSection>

      {presencial && (
        <DSection title="Centro proveedor">
          <Row>
            <F0Select
              label="Tipo de documento"
              value={data.centro.tipoDocumentoCentro}
              options={TIPO_DOCUMENTO_CENTRO_OPTIONS}
              onChange={(v: string) =>
                setCentro({ tipoDocumentoCentro: v as TipoDocumentoCentro })
              }
            />
            <Input
              label="Documento"
              value={data.centro.documentoCentro}
              onChange={(v) => setCentro({ documentoCentro: v ?? "" })}
            />
          </Row>
          <Input
            label="Nombre del centro"
            required
            value={data.centro.nombreCentro}
            error={err(!data.centro.nombreCentro)}
            onChange={(v) => setCentro({ nombreCentro: v ?? "" })}
          />
          <Input
            label="Dirección"
            value={data.centro.direccionDetallada}
            onChange={(v) => setCentro({ direccionDetallada: v ?? "" })}
          />
          <Row>
            <Input
              label="Código postal"
              value={data.centro.codPostal}
              error={
                showErrors && !validateCp(data.centro.codPostal)
                  ? "5 dígitos."
                  : undefined
              }
              onChange={(v) => setCentro({ codPostal: v ?? "" })}
            />
            <Input
              label="Localidad"
              value={data.centro.localidad}
              onChange={(v) => setCentro({ localidad: v ?? "" })}
            />
          </Row>
        </DSection>
      )}

      <DSection title="Horario">
        <F0Box maxWidth="64">
          <NumberInput
            label="Horas totales"
            required
            locale="es-ES"
            value={data.horario.horaTotales}
            error={err(!data.horario.horaTotales)}
            onChange={(v) => setHorario({ horaTotales: v })}
          />
        </F0Box>
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Text variant="label" content="Días de impartición" />
          <F0Box display="flex" gap="xs">
            {DIAS.map((d) => (
              <F0Button
                key={d.k}
                label={d.label}
                size="sm"
                variant={data.horario.dias[d.k] ? "default" : "outline"}
                onClick={() =>
                  setHorario({
                    dias: { ...data.horario.dias, [d.k]: !data.horario.dias[d.k] },
                  })
                }
              />
            ))}
          </F0Box>
        </F0Box>
      </DSection>

      <DSection title={`Tutores (${data.tutores.length})`}>
        {data.tutores.map((t) => (
          <F0Box key={t.id} display="flex" flexDirection="column" gap="md">
            <F0Box display="flex" justifyContent="between" alignItems="center">
              <F0Text
                variant="label"
                content={t.nombre ? `${t.nombre} ${t.apellido1}` : "Nuevo tutor"}
              />
              <F0Button
                label="Quitar tutor"
                icon={Delete}
                variant="neutral"
                size="sm"
                hideLabel
                onClick={() => removeTutor(t.id)}
              />
            </F0Box>
            <Row>
              <Input
                label="Nombre"
                value={t.nombre}
                onChange={(v) => patchTutor(t.id, { nombre: v ?? "" })}
              />
              <Input
                label="Apellido"
                value={t.apellido1}
                onChange={(v) => patchTutor(t.id, { apellido1: v ?? "" })}
              />
            </Row>
            <Row>
              <Input
                label="NIF"
                value={t.documento}
                error={
                  showErrors && !validateNif(t.documento) ? "NIF no válido." : undefined
                }
                onChange={(v) => patchTutor(t.id, { documento: v ?? "" })}
              />
              <NumberInput
                label="Nº de horas"
                locale="es-ES"
                value={t.numeroHoras}
                onChange={(v) => patchTutor(t.id, { numeroHoras: v })}
              />
            </Row>
            <Input
              label="Correo electrónico"
              value={t.correoElectronico}
              error={
                showErrors && !validateEmail(t.correoElectronico)
                  ? "Email no válido."
                  : undefined
              }
              onChange={(v) => patchTutor(t.id, { correoElectronico: v ?? "" })}
            />
            <div
              className="border-f1-border"
              style={{ borderBottomWidth: 1, borderBottomStyle: "solid" }}
            />
          </F0Box>
        ))}
        <F0Box>
          <F0Button label="Añadir tutor" icon={Add} variant="outline" size="sm" onClick={addTutor} />
        </F0Box>
      </DSection>
    </FormStack>
  )
}

// ── Fin del grupo (paso 3) ─────────────────────────────────────────────────

// Módulo económico máximo de FUNDAE (€ por participante y hora). Valores
// oficiales: presencial nivel básico 13 €/h, teleformación 7,5 €/h. La mixta
// (11) es una aproximación — el módulo mixto real se prorratea entre las horas
// presenciales y de teleformación.
const MODULO_EUR_HORA: Record<Modalidad, number> = {
  presencial: 13,
  teleformacion: 7.5,
  mixta: 11,
  presencial_aula_virtual: 13,
}

const eur = (n: number) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n)

/** Fila clave-valor para el desglose del resultado. */
function KV({
  label,
  value,
  strong,
}: {
  label: string
  value: string
  strong?: boolean
}) {
  return (
    <F0Box display="flex" justifyContent="between" alignItems="center" gap="md">
      <F0Text variant={strong ? "label" : "body"} content={label} />
      <F0Text variant={strong ? "label" : "body"} content={value} />
    </F0Box>
  )
}

/**
 * Fila de documento justificativo a conservar. Es informativa (no hay CTA
 * propio: el único CTA del detalle es "Generar XML"). Marca de viñeta a la
 * izquierda para que se lea como lista, etiqueta + pista debajo.
 */
function DocRow({ label, hint }: { label: string; hint?: string }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="none">
      <F0Text variant="body" content={label} />
      {hint ? <F0Text variant="description" content={hint} /> : null}
    </F0Box>
  )
}

export function FinForm({
  data,
  setData,
  showErrors,
  fechaFinPrevista,
  plazoHint,
  numHoras,
  numParticipantes,
  modalidad,
}: {
  data: FinGrupoData
  setData: (u: FinGrupoData | ((p: FinGrupoData) => FinGrupoData)) => void
  showErrors: boolean
  fechaFinPrevista: string
  plazoHint?: string
  numHoras: number | null
  numParticipantes: number | null
  modalidad: Modalidad
}) {
  const set = <K extends keyof FinGrupoData>(k: K, v: FinGrupoData[K]) =>
    setData((p) => ({ ...p, [k]: v }))
  const err = (cond: boolean) => (showErrors && cond ? "Obligatorio." : undefined)
  const num = (s: string) => (s ? Number(s) : null)
  const str = (v: number | null) => (v != null ? String(v) : "")

  // ── Bonificación: módulo × horas × participantes, tope sobre los costes ──
  const rate = MODULO_EUR_HORA[modalidad] ?? 13
  const moduloMax = (numHoras ?? 0) * (numParticipantes ?? 0) * rate
  const totalCostes =
    (num(data.costesDirectos) ?? 0) +
    (num(data.costesIndirectos) ?? 0) +
    (num(data.costesSalariales) ?? 0)
  const recuperable = Math.min(totalCostes, moduloMax)
  const exceso = Math.max(0, totalCostes - moduloMax)

  return (
    <FormStack>
      <DSection title="Finalización del grupo">
        <F0Box maxWidth="64">
          <Input
            label="Fecha de finalización"
            required
            // Solo mostramos la prevista cuando DIFIERE de la real (ahí aporta:
            // "planeaste X, cerraste en Y"). Si coinciden, repetir la misma
            // fecha no tiene sentido.
            hint={
              data.fechaFinReal && data.fechaFinReal !== fechaFinPrevista
                ? `Prevista: ${fechaFinPrevista}`
                : undefined
            }
            value={data.fechaFinReal}
            error={err(!data.fechaFinReal)}
            onChange={(v) => set("fechaFinReal", v ?? "")}
          />
        </F0Box>
        {plazoHint ? (
          <F0Text variant="description" content={plazoHint} />
        ) : null}
      </DSection>

      <DSection title="Costes imputados a FUNDAE">
        <Row>
          <NumberInput
            label="Costes directos"
            required
            locale="es-ES"
            units="€"
            value={num(data.costesDirectos)}
            error={err(!data.costesDirectos)}
            onChange={(v) => set("costesDirectos", str(v))}
          />
          <NumberInput
            label="Costes indirectos"
            required
            locale="es-ES"
            units="€"
            value={num(data.costesIndirectos)}
            error={err(!data.costesIndirectos)}
            onChange={(v) => set("costesIndirectos", str(v))}
          />
        </Row>
        <F0Box maxWidth="64">
          <NumberInput
            label="Costes salariales"
            required
            locale="es-ES"
            units="€"
            value={num(data.costesSalariales)}
            error={err(!data.costesSalariales)}
            onChange={(v) => set("costesSalariales", str(v))}
          />
        </F0Box>
      </DSection>

      <DSection
        title="Documentación justificativa"
        description="Documentos a conservar para justificar la bonificación ante FUNDAE en caso de auditoría."
      >
        {modalidadTienePresencial(modalidad) && (
          <DocRow
            label="Control de asistencia firmado"
            hint="Hoja de firmas de los participantes en cada sesión presencial"
          />
        )}
        {modalidadTieneOnline(modalidad) && (
          <DocRow
            label="Registro de conexiones de teleformación"
            hint="Tiempos de conexión de la plataforma"
          />
        )}
        <DocRow
          label="Diplomas o certificados de los participantes"
          hint="Acreditación de finalización de cada participante apto"
        />
      </DSection>

      <DSection title="Resultado de la bonificación">
        <F0Box display="flex" flexDirection="column" gap="sm">
          <KV label="Costes imputados" value={eur(totalCostes)} />
          <KV
            label={`Módulo bonificable (${rate} €/h × ${numHoras ?? 0}h × ${numParticipantes ?? 0} part.)`}
            value={eur(moduloMax)}
          />
          <F0Box borderTop="default" paddingTop="sm">
            <KV label="Recuperable estimado" value={eur(recuperable)} strong />
          </F0Box>
        </F0Box>
        {exceso > 0 && (
          <F0Alert
            variant="warning"
            title={`${eur(exceso)} por encima del módulo`}
            description={`FUNDAE solo bonifica hasta ${eur(moduloMax)}; el resto no es recuperable.`}
          />
        )}
        <F0Text
          variant="description"
          content="Estimación por módulo económico. No incluye el crédito anual de formación ni la cofinanciación privada obligatoria."
        />
      </DSection>
    </FormStack>
  )
}
