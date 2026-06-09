import {
  F0Alert,
  F0Box,
  F0Button,
  F0Card,
  F0Heading,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import {
  Input,
  NumberInput,
  ToggleGroup,
  ToggleGroupItem,
} from "@factorialco/f0-react/dist/experimental"
import { Add, Delete } from "@factorialco/f0-react/icons/app"
import { useCallback, useMemo } from "react"

import { OptionToggle } from "./OptionToggle"
import { SummarySection } from "./SummarySection"

import {
  MODALIDAD_OPTIONS,
  TIPO_DOCUMENTO_CENTRO_OPTIONS,
  validateCif,
  validateCodigo,
  validateCp,
  validateDocumento,
  validateEmail,
  validateNif,
  validateTelefono,
  type CentroProveedor,
  type DiasImparticion,
  type InicioGrupoData,
  type Modalidad,
  type TipoDocumentoCentro,
  type Tutor,
} from "./fundaeTypes"

type Props = {
  data: InicioGrupoData
  setData: (
    updater: InicioGrupoData | ((prev: InicioGrupoData) => InicioGrupoData)
  ) => void
  validate: boolean
  readOnly?: boolean
}

const DAY_LABELS: Array<{ key: keyof DiasImparticion; label: string }> = [
  { key: "L", label: "Lunes" },
  { key: "M", label: "Martes" },
  { key: "X", label: "Miércoles" },
  { key: "J", label: "Jueves" },
  { key: "V", label: "Viernes" },
  { key: "S", label: "Sábado" },
  { key: "D", label: "Domingo" },
]

function newTutor(): Tutor {
  return {
    id: `tutor-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    numeroHoras: null,
    tipoDocumento: "10",
    documento: "",
    nombre: "",
    apellido1: "",
    apellido2: "",
    telefono: "",
    correoElectronico: "",
  }
}

export function InicioSection({ data, setData, validate, readOnly }: Props) {
  const isPresencial = data.modalidad === "presencial"
  const isTele = data.modalidad === "teleformacion"
  const isMixta = data.modalidad === "mixta"

  const needsCentroPresencial = isPresencial || isMixta
  const needsTeleformacion = isTele || isMixta

  const setField = useCallback(
    <K extends keyof InicioGrupoData>(k: K, v: InicioGrupoData[K]) =>
      setData((prev) => ({ ...prev, [k]: v })),
    [setData]
  )

  const setCentro = useCallback(
    (k: keyof CentroProveedor, v: string) =>
      setData((prev) => ({ ...prev, centro: { ...prev.centro, [k]: v } })),
    [setData]
  )

  const setLugar = useCallback(
    (k: keyof InicioGrupoData["lugarImparticion"], v: string) =>
      setData((prev) => ({
        ...prev,
        lugarImparticion: { ...prev.lugarImparticion, [k]: v },
      })),
    [setData]
  )

  const setHorario = useCallback(
    <K extends keyof InicioGrupoData["horario"]>(
      k: K,
      v: InicioGrupoData["horario"][K]
    ) =>
      setData((prev) => ({ ...prev, horario: { ...prev.horario, [k]: v } })),
    [setData]
  )

  // Stable ToggleGroup value reference
  const selectedDays = useMemo(
    () => DAY_LABELS.filter((d) => data.horario.dias[d.key]).map((d) => d.key),
    [data.horario.dias]
  )

  // Tutor handlers
  const addTutor = useCallback(
    () => setData((prev) => ({ ...prev, tutores: [...prev.tutores, newTutor()] })),
    [setData]
  )
  const removeTutor = useCallback(
    (id: string) =>
      setData((prev) => ({
        ...prev,
        tutores: prev.tutores.filter((t) => t.id !== id),
      })),
    [setData]
  )
  const updateTutor = useCallback(
    (id: string, patch: Partial<Tutor>) =>
      setData((prev) => ({
        ...prev,
        tutores: prev.tutores.map((t) => (t.id === id ? { ...t, ...patch } : t)),
      })),
    [setData]
  )

  // ── Read-only summary (comunicado) — aligned with AccionFormativaCard
  //    and FinSection: a clean label/value list, not a disabled form. ──
  if (readOnly) {
    const dash = (s?: string | number | null) =>
      s === null || s === undefined || s === "" ? "—" : String(s)
    const modalidadLabel =
      MODALIDAD_OPTIONS.find((o) => o.value === data.modalidad)?.label ??
      data.modalidad
    const tipoDoc = (v: string) =>
      TIPO_DOCUMENTO_CENTRO_OPTIONS.find((o) => o.value === v)?.label ?? v
    const diasText =
      DAY_LABELS.filter((d) => data.horario.dias[d.key])
        .map((d) => d.label)
        .join(", ") || "—"
    const h = data.horario
    const tramos: string[] = []
    if (h.horaInicioTramo1 || h.horaFinTramo1)
      tramos.push(`${dash(h.horaInicioTramo1)}–${dash(h.horaFinTramo1)}`)
    if (h.horaInicioTramo2 || h.horaFinTramo2)
      tramos.push(`${dash(h.horaInicioTramo2)}–${dash(h.horaFinTramo2)}`)

    return (
      <F0Box display="flex" flexDirection="column" gap="2xl">
        <SummarySection
          title="Datos del grupo"
          items={[
            { label: "Código acción formativa", value: dash(data.idAccion) },
            { label: "Código de grupo", value: dash(data.idGrupo) },
            { label: "Descripción", value: dash(data.descripcion) },
            { label: "Fecha de inicio", value: dash(data.fechaInicio) },
            { label: "Fecha fin prevista", value: dash(data.fechaFin) },
            { label: "Nº participantes", value: dash(data.numeroParticipantes) },
            { label: "Responsable", value: dash(data.responsable) },
            { label: "Teléfono", value: dash(data.telefonoContacto) },
            { label: "Modalidad", value: modalidadLabel },
          ]}
        />

        {needsCentroPresencial && (
          <SummarySection
            title="Centro proveedor"
            items={[
              { label: "Tipo de documento", value: tipoDoc(data.centro.tipoDocumentoCentro) },
              { label: "Documento", value: dash(data.centro.documentoCentro) },
              { label: "Nombre del centro", value: dash(data.centro.nombreCentro) },
              { label: "Dirección", value: dash(data.centro.direccionDetallada) },
              { label: "Localidad", value: dash(data.centro.localidad) },
              { label: "Código postal", value: dash(data.centro.codPostal) },
              {
                label: "Lugar de impartición",
                value: data.lugarMismoQueCentro
                  ? "Mismo que el centro proveedor"
                  : [
                      dash(data.lugarImparticion.nombreCentro),
                      dash(data.lugarImparticion.direccionDetallada),
                      dash(data.lugarImparticion.localidad),
                      dash(data.lugarImparticion.codPostal),
                    ].join(", "),
              },
            ]}
          />
        )}

        <SummarySection
          title="Horario"
          items={[
            { label: "Horas totales", value: h.horaTotales ? `${h.horaTotales} h` : "—" },
            { label: "Días de impartición", value: diasText },
            { label: "Tramos horarios", value: tramos.length ? tramos.join(" · ") : "—" },
          ]}
        />

        <SummarySection
          title={`Tutores (${data.tutores.length})`}
          columns="2"
          items={data.tutores.map((t, i) => ({
            label: `Tutor ${i + 1}`,
            value:
              `${dash(t.nombre)} ${dash(t.apellido1)} ${t.apellido2 ?? ""}`
                .replace(/\s+/g, " ")
                .trim() +
              ` · ${tipoDoc(t.tipoDocumento)} ${dash(t.documento)} · ${t.numeroHoras ? t.numeroHoras + " h" : "—"}`,
          }))}
        />
      </F0Box>
    )
  }

  return (
    <F0Box display="flex" flexDirection="column" gap="2xl">
      {/* ── Datos del grupo ────────────────────────────────────────── */}
      <F0Card title="Datos del grupo">
        <F0Box padding="lg" display="flex" flexDirection="column" gap="md">
          <F0Box display="grid" columns="2" gap="lg">
            <Input
              label="Código acción formativa"
              hint="Heredado de la acción formativa. 1–5 dígitos."
              value={data.idAccion}
              disabled
              onChange={() => {}}
            />
            <Input
              label="Código de grupo"
              hint="Número de grupo dentro de la acción formativa (1–99999)."
              placeholder="00001"
              value={data.idGrupo}
              error={
                validate && !data.idGrupo
                  ? "Obligatorio."
                  : data.idGrupo && !validateCodigo(data.idGrupo)
                    ? "Solo dígitos, máximo 5."
                    : undefined
              }
              disabled={readOnly}
              onChange={(v) => setField("idGrupo", v ?? "")}
            />
          </F0Box>

          <Input
            label="Descripción del grupo"
            hint="Texto libre (máx. 100 caracteres)."
            value={data.descripcion}
            error={
              validate && !data.descripcion
                ? "Obligatorio."
                : data.descripcion.length > 100
                  ? "Máx. 100 caracteres."
                  : undefined
            }
            disabled={readOnly}
            onChange={(v) => setField("descripcion", v ?? "")}
          />

          <F0Box display="grid" columns="3" gap="lg">
            <Input
              label="Fecha de inicio"
              hint="DD/MM/AAAA"
              placeholder="01/06/2026"
              value={data.fechaInicio}
              error={validate && !data.fechaInicio ? "Obligatorio." : undefined}
              disabled={readOnly}
              onChange={(v) => setField("fechaInicio", v ?? "")}
            />
            <Input
              label="Fecha fin prevista"
              hint="DD/MM/AAAA"
              placeholder="30/06/2026"
              value={data.fechaFin}
              error={validate && !data.fechaFin ? "Obligatorio." : undefined}
              disabled={readOnly}
              onChange={(v) => setField("fechaFin", v ?? "")}
            />
            <NumberInput
              label="Nº participantes previstos"
              locale="es-ES"
              value={data.numeroParticipantes}
              error={validate && !data.numeroParticipantes ? "Obligatorio." : undefined}
              disabled={readOnly}
              onChange={(v) => setField("numeroParticipantes", v)}
            />
          </F0Box>

          <F0Box display="grid" columns="2" gap="lg">
            <Input
              label="Responsable del grupo"
              placeholder="Nombre y apellidos"
              value={data.responsable}
              error={validate && !data.responsable ? "Obligatorio." : undefined}
              disabled={readOnly}
              onChange={(v) => setField("responsable", v ?? "")}
            />
            <Input
              label="Teléfono de contacto"
              hint="9–12 dígitos, sin espacios."
              placeholder="911234567"
              value={data.telefonoContacto}
              error={
                validate && !data.telefonoContacto
                  ? "Obligatorio."
                  : data.telefonoContacto && !validateTelefono(data.telefonoContacto)
                    ? "Solo dígitos (9–12)."
                    : undefined
              }
              disabled={readOnly}
              onChange={(v) => setField("telefonoContacto", v ?? "")}
            />
          </F0Box>

          <F0Box maxWidth="64">
            <F0Select
              label="Modalidad"
              value={data.modalidad}
              options={MODALIDAD_OPTIONS}
              disabled={readOnly}
              onChange={(v: string) => setField("modalidad", v as Modalidad)}
            />
          </F0Box>
        </F0Box>
      </F0Card>

      {/* ── Centro impartidor (presencial/mixta) ───────────────────── */}
      {needsCentroPresencial && (
        <F0Card title="Centro proveedor (presencial)">
          <F0Box padding="lg" display="flex" flexDirection="column" gap="md">
            <F0Text
              variant="small"
              content="Entidad responsable de impartir la formación. Para empresa bonificada se identifica con NIF / NIE / Pasaporte."
            />

            <F0Box display="grid" columns="3" gap="lg">
              <OptionToggle
                label="Tipo de documento"
                value={data.centro.tipoDocumentoCentro}
                options={TIPO_DOCUMENTO_CENTRO_OPTIONS}
                disabled={readOnly}
                onChange={(v) =>
                  setCentro("tipoDocumentoCentro", v as TipoDocumentoCentro)
                }
              />
              <Input
                label="Documento del centro"
                placeholder="12345678A"
                value={data.centro.documentoCentro}
                error={
                  validate && !data.centro.documentoCentro
                    ? "Obligatorio."
                    : data.centro.documentoCentro &&
                        !validateDocumento(data.centro.documentoCentro)
                      ? "Entre 9 y 15 caracteres."
                      : undefined
                }
                disabled={readOnly}
                onChange={(v) => setCentro("documentoCentro", v ?? "")}
              />
              <Input
                label="Nombre del centro"
                placeholder="Centro de Formación S.L."
                value={data.centro.nombreCentro}
                error={
                  validate && !data.centro.nombreCentro ? "Obligatorio." : undefined
                }
                disabled={readOnly}
                onChange={(v) => setCentro("nombreCentro", v ?? "")}
              />
            </F0Box>

            <Input
              label="Dirección"
              placeholder="Calle Mayor 1"
              value={data.centro.direccionDetallada}
              error={
                validate && !data.centro.direccionDetallada ? "Obligatorio." : undefined
              }
              disabled={readOnly}
              onChange={(v) => setCentro("direccionDetallada", v ?? "")}
            />

            <F0Box display="grid" columns="2" gap="lg">
              <Input
                label="Localidad"
                value={data.centro.localidad}
                error={
                  validate && !data.centro.localidad ? "Obligatorio." : undefined
                }
                disabled={readOnly}
                onChange={(v) => setCentro("localidad", v ?? "")}
              />
              <Input
                label="Código postal"
                placeholder="28001"
                value={data.centro.codPostal}
                error={
                  validate && !data.centro.codPostal
                    ? "Obligatorio."
                    : data.centro.codPostal && !validateCp(data.centro.codPostal)
                      ? "5 dígitos."
                      : undefined
                }
                disabled={readOnly}
                onChange={(v) => setCentro("codPostal", v ?? "")}
              />
            </F0Box>

            {/* Lugar de impartición: igual que centro por defecto */}
            <F0Box display="flex" alignItems="center" gap="sm">
              <input
                type="checkbox"
                checked={data.lugarMismoQueCentro}
                disabled={readOnly}
                onChange={(e) =>
                  setField("lugarMismoQueCentro", e.target.checked)
                }
              />
              <F0Text
                variant="small"
                content="El lugar de impartición es el mismo que el centro proveedor"
              />
            </F0Box>

            {!data.lugarMismoQueCentro && (
              <F0Box display="flex" flexDirection="column" gap="md">
                <F0Heading
                  as="h4"
                  variant="heading"
                  content="Lugar de impartición"
                />
                <F0Box display="grid" columns="2" gap="lg">
                  <Input
                    label="CIF (opcional)"
                    placeholder="A12345678"
                    value={data.lugarImparticion.cif ?? ""}
                    error={
                      data.lugarImparticion.cif &&
                      !validateCif(data.lugarImparticion.cif)
                        ? "Formato CIF inválido."
                        : undefined
                    }
                    disabled={readOnly}
                    onChange={(v) => setLugar("cif", v ?? "")}
                  />
                  <Input
                    label="Nombre del centro"
                    value={data.lugarImparticion.nombreCentro}
                    error={
                      validate && !data.lugarImparticion.nombreCentro
                        ? "Obligatorio."
                        : undefined
                    }
                    disabled={readOnly}
                    onChange={(v) => setLugar("nombreCentro", v ?? "")}
                  />
                </F0Box>
                <Input
                  label="Dirección"
                  value={data.lugarImparticion.direccionDetallada}
                  error={
                    validate && !data.lugarImparticion.direccionDetallada
                      ? "Obligatorio."
                      : undefined
                  }
                  disabled={readOnly}
                  onChange={(v) => setLugar("direccionDetallada", v ?? "")}
                />
                <F0Box display="grid" columns="2" gap="lg">
                  <Input
                    label="Localidad"
                    value={data.lugarImparticion.localidad}
                    error={
                      validate && !data.lugarImparticion.localidad
                        ? "Obligatorio."
                        : undefined
                    }
                    disabled={readOnly}
                    onChange={(v) => setLugar("localidad", v ?? "")}
                  />
                  <Input
                    label="Código postal"
                    value={data.lugarImparticion.codPostal}
                    error={
                      validate && !data.lugarImparticion.codPostal
                        ? "Obligatorio."
                        : data.lugarImparticion.codPostal &&
                            !validateCp(data.lugarImparticion.codPostal)
                          ? "5 dígitos."
                          : undefined
                    }
                    disabled={readOnly}
                    onChange={(v) => setLugar("codPostal", v ?? "")}
                  />
                </F0Box>
              </F0Box>
            )}
          </F0Box>
        </F0Card>
      )}

      {/* ── Asistencia teleformación (tele/mixta) ──────────────────── */}
      {needsTeleformacion && (
        <F0Card title="Asistencia a la teleformación (opcional)">
          <F0Box padding="lg" display="flex" flexDirection="column" gap="md">
            <F0Text
              variant="small"
              content="Centro físico donde el alumno puede recibir tutoría presencial relacionada con la teleformación. FUNDAE permite no informarlo si toda la formación es 100% online."
            />
            <F0Alert
              variant="info"
              title="Esta sección es opcional"
              description="Si tu modalidad de teleformación no incluye sede física de apoyo, déjala vacía."
            />
          </F0Box>
        </F0Card>
      )}

      {/* ── Horario ────────────────────────────────────────────────── */}
      <F0Card title="Horario">
        <F0Box padding="lg" display="flex" flexDirection="column" gap="md">
          <F0Box display="grid" columns="3" gap="lg">
            <NumberInput
              label="Horas totales"
              locale="es-ES"
              value={data.horario.horaTotales}
              error={
                validate && !data.horario.horaTotales ? "Obligatorio." : undefined
              }
              disabled={readOnly}
              onChange={(v) => setHorario("horaTotales", v)}
            />
          </F0Box>

          <F0Box display="flex" flexDirection="column" gap="xs">
            <F0Text variant="label" content="Días de impartición" />
            <ToggleGroup
              type="multiple"
              disabled={readOnly}
              value={selectedDays}
              onValueChange={(values: string[]) => {
                const next: DiasImparticion = {
                  L: false, M: false, X: false, J: false, V: false, S: false, D: false,
                }
                values.forEach((v) => {
                  if (v in next) next[v as keyof DiasImparticion] = true
                })
                setHorario("dias", next)
              }}
            >
              {DAY_LABELS.map((d) => (
                <ToggleGroupItem key={d.key} value={d.key} aria-label={d.label}>
                  {d.key}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </F0Box>

          <F0Heading as="h4" variant="heading" content="Tramos horarios (opcional)" />
          <F0Box display="grid" columns="4" gap="md">
            <Input
              label="Inicio tramo 1"
              hint="HH:MM"
              placeholder="09:00"
              value={data.horario.horaInicioTramo1 ?? ""}
              disabled={readOnly}
              onChange={(v) => setHorario("horaInicioTramo1", v ?? "")}
            />
            <Input
              label="Fin tramo 1"
              hint="HH:MM"
              placeholder="13:00"
              value={data.horario.horaFinTramo1 ?? ""}
              disabled={readOnly}
              onChange={(v) => setHorario("horaFinTramo1", v ?? "")}
            />
            <Input
              label="Inicio tramo 2"
              hint="HH:MM"
              placeholder="14:00"
              value={data.horario.horaInicioTramo2 ?? ""}
              disabled={readOnly}
              onChange={(v) => setHorario("horaInicioTramo2", v ?? "")}
            />
            <Input
              label="Fin tramo 2"
              hint="HH:MM"
              placeholder="18:00"
              value={data.horario.horaFinTramo2 ?? ""}
              disabled={readOnly}
              onChange={(v) => setHorario("horaFinTramo2", v ?? "")}
            />
          </F0Box>
        </F0Box>
      </F0Card>

      {/* ── Tutores ─────────────────────────────────────────────────── */}
      <F0Card title={`Tutores (${data.tutores.length})`}>
        <F0Box padding="lg" display="flex" flexDirection="column" gap="md">
          <F0Text
            variant="small"
            content="Personas responsables de impartir la formación. FUNDAE requiere al menos un tutor con datos completos."
          />

          {validate && data.tutores.length === 0 && (
            <F0Alert
              variant="warning"
              title="Falta al menos un tutor"
              description="Añade un tutor antes de comunicar el inicio."
            />
          )}

          {data.tutores.map((t, idx) => (
            <F0Box
              key={t.id}
              border="default"
              borderColor="secondary"
              borderRadius="md"
              padding="lg"
            >
              <F0Box
                display="flex"
                alignItems="center"
                justifyContent="between"
                marginBottom="md"
              >
                <F0Heading as="h4" variant="heading" content={`Tutor ${idx + 1}`} />
                {!readOnly && (
                  <F0Button
                    label="Quitar"
                    icon={Delete}
                    variant="outline"
                    size="sm"
                    onClick={() => removeTutor(t.id)}
                  />
                )}
              </F0Box>

              <F0Box display="grid" columns="3" gap="md">
                <OptionToggle
                  label="Tipo documento"
                  value={t.tipoDocumento}
                  options={TIPO_DOCUMENTO_CENTRO_OPTIONS}
                  disabled={readOnly}
                  onChange={(v) =>
                    updateTutor(t.id, { tipoDocumento: v as TipoDocumentoCentro })
                  }
                />
                <Input
                  label="Documento"
                  placeholder="12345678A"
                  value={t.documento}
                  error={
                    validate && !t.documento
                      ? "Obligatorio."
                      : t.documento && !validateNif(t.documento)
                        ? "Formato inválido."
                        : undefined
                  }
                  disabled={readOnly}
                  onChange={(v) => updateTutor(t.id, { documento: v ?? "" })}
                />
                <NumberInput
                  label="Horas que imparte"
                  locale="es-ES"
                  value={t.numeroHoras}
                  error={validate && !t.numeroHoras ? "Obligatorio." : undefined}
                  disabled={readOnly}
                  onChange={(v) => updateTutor(t.id, { numeroHoras: v })}
                />
              </F0Box>

              <F0Box display="grid" columns="3" gap="md" marginTop="md">
                <Input
                  label="Nombre"
                  value={t.nombre}
                  error={validate && !t.nombre ? "Obligatorio." : undefined}
                  disabled={readOnly}
                  onChange={(v) => updateTutor(t.id, { nombre: v ?? "" })}
                />
                <Input
                  label="Apellido 1"
                  value={t.apellido1}
                  error={validate && !t.apellido1 ? "Obligatorio." : undefined}
                  disabled={readOnly}
                  onChange={(v) => updateTutor(t.id, { apellido1: v ?? "" })}
                />
                <Input
                  label="Apellido 2 (opcional)"
                  value={t.apellido2}
                  disabled={readOnly}
                  onChange={(v) => updateTutor(t.id, { apellido2: v ?? "" })}
                />
              </F0Box>

              <F0Box display="grid" columns="2" gap="md" marginTop="md">
                <Input
                  label="Teléfono"
                  placeholder="911234567"
                  value={t.telefono}
                  error={
                    validate && !t.telefono
                      ? "Obligatorio."
                      : t.telefono && !validateTelefono(t.telefono)
                        ? "Solo dígitos (9–12)."
                        : undefined
                  }
                  disabled={readOnly}
                  onChange={(v) => updateTutor(t.id, { telefono: v ?? "" })}
                />
                <Input
                  label="Correo electrónico"
                  placeholder="tutor@example.com"
                  value={t.correoElectronico}
                  error={
                    validate && !t.correoElectronico
                      ? "Obligatorio."
                      : t.correoElectronico && !validateEmail(t.correoElectronico)
                        ? "Formato de correo inválido."
                        : undefined
                  }
                  disabled={readOnly}
                  onChange={(v) =>
                    updateTutor(t.id, { correoElectronico: v ?? "" })
                  }
                />
              </F0Box>
            </F0Box>
          ))}

          {!readOnly && (
            <F0Box>
              <F0Button
                label="Añadir tutor"
                icon={Add}
                variant="outline"
                onClick={addTutor}
              />
            </F0Box>
          )}
        </F0Box>
      </F0Card>
    </F0Box>
  )
}
