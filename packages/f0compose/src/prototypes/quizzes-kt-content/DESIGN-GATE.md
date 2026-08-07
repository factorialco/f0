# Design gate — aviso de grupos afectados al cambiar las reglas de completion

Se rellena **antes** de tocar el `.tsx`. Si está más viejo que el código, el hook bloquea la edición.

## a) Qué tiene que comunicar la pantalla, por orden de importancia

1. **Cuánta gente ya aprobada dejaría de estarlo.** Es el único dato que cambia una decisión. Va en el sitio más prominente.
2. **En qué grupos**, identificables por nombre, con su número. Son entidades, no una enumeración en prosa.
3. **Que hoy no cambia nada** (RFC decisión 2). Sin esto, el dato 1 es una alarma falsa.
4. **Dónde se actúa** — con camino, no con una instrucción sin enlace.

Fuera: reparto final Passed/Failed por grupo, gente en progreso, y quien sube de Failed a Passed (es ruido en una señal de riesgo).

## b) Restricciones acumuladas (de los rechazos de Jon, 3-ago)

| # | Restricción | Versión que la violó |
|---|---|---|
| R1 | Tiene que decir **cuáles** grupos y **cuánta** gente | `v=min` ("guardar algo que ni avisa de los cambios") |
| R2 | No puede ser un párrafo / texto a chorro | la de patrón en prosa ("texto a cholón") |
| R3 | No puede ser tabla con columnas + chips | `v=table` ("demasiado divider raro") |
| R4 | No pueden ser 3 opciones abstractas | los 3 radios ("no se entiende una mierda") |
| R5 | El número no puede ir en gris de metadata | lista con frase gris ("pasa desapercibida") |
| R6 | No anunciar cambios que al guardar no ocurren | la matriz `6 Passed › Failed` de cabecera |
| R7 | Un chip = una idea (no mezclar buena y mala noticia) | chip "6 Passed · 2 Failed" |
| R8 | Cada versión se comprueba contra **todas** las anteriores | las seis |
| R9 | El **título** lleva el dato, no la etiqueta del botón | "Confirm the new completion rules" |
| R10 | Nombres de entidad nunca separados por comas en prosa (llevan `·` dentro y se vuelven ilegibles) | la versión en párrafo |
| R11 | Ninguna línea manda a otro sitio sin dar el camino (enlace o nombre) | "from the group itself" |
| R12 | El nombre de un criterio en la UI es **el del ajuste** que el admin acaba de tocar, nunca un sinónimo | `Quizzes 75%` (el ajuste se llama "Minimum quiz score") |
| R13 | Todos los tags de una misma columna comparten gramática | `LMS modules unfinished` junto a tres tags con valor |
| R14 | Una cabecera no puede afirmar un cambio que no ha ocurrido en el dato de su celda | `What they no longer meet` (su nota no ha cambiado; el listón sí) |
| R15 | **Todo string de interfaz lleva fuente**: `file:line` del producto real, la etiqueta del ajuste, o "lo decidió Jon el X". Sin fuente no se escribe | `Lose completion` — me inventé el sustantivo "completion" para ahorrar 30px; el producto llama a ese estado **Completed** (`frontend/src/modules/trainings/constants/trainingLearner.ts:21`) |
| R16 | Una columna por criterio: **descartada** por Jon (cabeceras cortadas, rejilla medio vacía). No volver a proponerla | la versión de 3-4 columnas |
| R17 | El **% exacto de cada persona no hace falta**: no cambia ninguna decisión. Basta *qué* criterio no alcanza | `48%`, `Knowledge test 69% · needs 75%` |
| R18 | El listón es del **curso**: se dice **una vez**, no por línea | `· needs 90%` repetido 25 veces |
| R19 | Un tag solo lleva **categorías** (el nombre del criterio). Números dentro de un tag, nunca | `Knowledge test 48%` |

**R1+R2+R3 juntas no se satisfacen dentro de un modal.** Si lo cuentas es prosa, si lo estructuras es tabla.

**DECISIÓN DE JON (3-ago):** se resuelve **al cambiar el ajuste**, no en la tabla de grupos. Argumenté lo contrario (decisión no urgente, hace falta ver a las personas, la tarea 9 del RFC ya crea la acción a demanda, escala mal con 20 ediciones); decidió al guardar y se acata.

Consecuencia: el contenedor es el diálogo de guardado, y el precedente que aplica es `ManageMembersModal` — diálogo + tabla real + `onSelectItems` — no los modales de prosa. Lo que se corrige de mi ejecución anterior de esa tabla, punto por punto:

| Se corrige | Restricción que lo pedía |
|---|---|
| El título pasa a ser el dato ("6 people would no longer pass this course"), no la etiqueta del botón | R9 |
| Una idea por columna; el único chip es el de lo que se pierde | R5, R7 |
| Fuera la columna "Already judged", que repetía "Passed now" | R3 (menos divisores) |
| El nombre del grupo es enlace a sus participantes: hay camino para ver a las personas | R11 |
| Nada se anuncia como hecho: la selección empieza vacía y el aviso solo aparece al marcar | R6 |

## c) Patrón real del producto — fichero y línea

| Precedente | Dónde | Forma | ¿Aplica? |
|---|---|---|---|
| Disclaimer de cambio de ajuste | `~/code/factorial/frontend/src/modules/attendance/components/SettingItemPage/TimeTracking/EffectiveAtDisclaimerModal/index.tsx` | `Modal illustration="alert"` + título + **un párrafo** + Cancel/Confirm | **No.** Avisa de *una* cosa sin detalle por entidad. Copiar su envase produjo R2. |
| Borrar equipo con entidades afectadas | `modules/job_catalog/components/EquipmentDataTable/index.tsx:514` | confirm + prosa que enumera **recuentos por tipo** ("2 families, 3 roles") | **Parcial.** Enumera recuentos, no entidades con nombre. Con 15 grupos revienta. |
| Tabla con selección dentro de diálogo | `modules/posts/components/Groups/CommunityHeader/ManageMembersModal.tsx:237` | `OneDataCollection` tabla + `onSelectItems` en `F0Dialog` | **Existe**, pero es para *elegir* miembros, no para *avisar* de impacto → produjo R3. |
| **Abrir el detalle de una fila** | `~/code/factorial/frontend/src/modules/trainings/components/Budgets/TrainingResourceDataCollection/index.tsx:265` → `itemOnClick: (item) => () => setSelectedItem(item)`, con `itemActions` solo para secundarias (ir al grupo, eliminar) | fila pulsable, sin navegar | **Sí.** Es como se ve "quiénes hay detrás de esta fila". Puse lo principal en el menú ⋯ sin consultar nada: invento, corregido |
| Aviso persistente en la ficha | `F0Alert` con `action` en el detalle de grupo | banner + CTA en contexto | **Sí**, para el paso de actuar. Ya montado (`?recalc=pending`). |

## d) Por qué el patrón elegido aplica a **esta forma de información**

La forma es: *un conjunto de entidades con un número de riesgo cada una, sobre las que hoy no se actúa.* Eso no es una confirmación de una sola cosa (precedente 1) ni un selector (precedente 3): es **estado de una lista de entidades**. El sitio donde el producto muestra estado por entidad es la tabla de esas entidades con tag por fila — no un diálogo. De ahí la conclusión de (b).

## Escala (Jon, 3-ago: "hay que tratar el caso de cómo escala")

Formas consideradas, todas del mismo componente (`OneDataCollection`: *"tables, lists, kanbans and grids… filters, sorting, pagination, search, visualization toggles, empty states"*):

| Forma | 3 grupos | 15+ grupos | Veredicto |
|---|---|---|---|
| `type: "table"` | divisores de fila que Jon nota | escanea y compara; trae buscar/ordenar/paginar | **elegida**, con las afordancias de escala encendidas |
| `type: "card"` | más calmada, sin divisores | muro inescaneable, pierde alineación de columnas | no |
| `type: "list"` | sin divisores | igual que card, sin comparación numérica | no |
| lista a mano (F0Box) | limpia | no hay buscar/ordenar/paginar/select-all | prohibido (catálogo primero) |

Decisiones de escala: ordenación por **Would lose it** (el criterio con el que un admin decide), buscador cuando hay muchos grupos, resumen con el total seleccionado, y **altura máxima**: scrollea la tabla dentro del diálogo, no crece el diálogo (fue una pega explícita de Jon).

**Comprobado en el navegador con `?groups=14` (3-ago):** el diálogo crece hasta salirse del viewport — título cortado arriba, última fila cortada abajo. El buscador y el selector de columnas aparecen solos (afordancia de escala del componente, correcta). Arreglo: la tabla scrollea dentro con altura máxima; el diálogo no crece.

Segunda comprobación con 14 grupos: la altura ya está contenida y salen buscador, resumen "14 groups" y flechas de orden, pero **el orden no se aplicaba** — mi adaptador leía mal el parámetro. Se pasa a `applySort`, el helper que ya usan las otras tablas del prototipo.

Límite honesto que no arregla el UI: con ~20 ediciones, elegir grupo por grupo es una mala tarea en cualquier widget. Ahí lo que sirve es "todos" + revisar cada grupo por su cuenta después. Si la consulta del RFC (estados mezclados) devuelve de media más de ~10, hay que revisitar esta pantalla entera.

## Columnas (Jon, 3-ago: "¿hace falta decir passed, lose y gain?")

Aprobado el cambio a **Group · Already passed · Would now fail**:

- Fuera **"Would gain it"**: subir de Failed a Passed no hace dudar a nadie, no cambia la decisión, y con 14 grupos era una columna de guiones. Ese dato vive en el aviso agregado.
- Fuera el pronombre **"it"**: dependía de la cabecera de al lado ("Passed") para significar algo. Cada cabecera tiene que explicarse sola.
- **"Already passed"** se queda porque da el denominador: 2 de 8 y 2 de 30 son decisiones distintas.

## Cumplimiento del RFC — dos huecos abiertos

1. **Recalcular colgado del Save cae en una contradicción del RFC.** Decisión 2: un cambio de ajustes *nunca* dispara recálculo. Decisión 3: el diálogo pregunta si recalcular. Criterio de éxito: *"changes nobody's status **on the day it is saved**"*. Nuestro botón lo despacha en el mismo clic y el mismo día. **Pendiente de ruling de Yara.** Si es incumplimiento, el recálculo sale del botón y vuelve al grupo.
2. **Certificados por vuelta están fuera de alcance en v1** → quien sube a Passed al recalcular **no recibe certificado**. El copy solo decía que los ya emitidos no se retiran, que es la mitad. Se añade.

## Vocabulario (Jon, 3-ago: "recalculate suena muy técnico, necesitamos algo más friendly")

Verbo elegido: **re-check**. Descartados: *recalculate* (jerga de ingeniería, viene del RFC y del código), *judge / re-judge* (suena a tribunal), *apply the new rules* (correcto pero suena aditivo, no comunica que sobrescribe un resultado existente), *update* (demasiado vago: no dice qué se actualiza).

Se aplica en los cinco textos del diálogo y en el banner del grupo, para que sea el mismo verbo en toda la iniciativa.

## El banner "Recalculate participant statuses" — fuera (Jon, 3-ago)

Venía verbatim del clon de las settings de Ana, debajo de las tarjetas de Completion configuration. Se quita de nuestra copia porque **miente con el RFC**: prometía *"update the progress status for all the participants in the course"* cuando la decisión 2 dice que guardar no cambia el estado de nadie y el re-check es por grupo. Además usaba el vocabulario descartado. Lo que sí queda es el aviso contextual dentro de la tarjeta que estás cambiando, que sí es verdad.

Pendiente fuera de este prototipo: decírselo a Ana para el prototipo original de settings.

## El re-check sale del banner del grupo (Jon, 3-ago)

Razón de Jon: si la decisión se toma al guardar, obligarle a ir grupo a grupo después es trabajo duplicado; y un CTA ahí se lee como "recalcula por si el guardado no funcionó" (su analogía: poner una alarma y que la home te pida recalcularla). Mi justificación anterior — "por si te lo saltaste" — era mala y queda retirada.

Modelo final: **se decide solo al guardar**, en bloque, con select-all y orden por riesgo. El banner del grupo **solo informa** y es el único rastro que queda (decisión 7 del RFC: un re-check no deja registro).

El re-check a demanda de la tarea 9 se queda como herramienta de mantenimiento para estados obsoletos (el incidente de julio del RFC), sin superficie de admin. **A confirmar con Yara**: si el diálogo cubre la decisión, la tarea 9 puede no necesitar pantalla.

## "Already passed" fuera: la proporción va en la columna de riesgo (3-ago)

Jon leyó "Already passed" como *"los que ahora aprobarían por el cambio"* — justo lo contrario de lo que era (los que están marcados Passed hoy, con las reglas viejas). Si el diseñador que lleva un día en la pantalla la lee al revés, un admin también.

Queda **Group · Would now fail** con la proporción dentro: `⚠ 2 of 8`. El dato y su contexto en la misma celda, sin cabecera que interpretar. El denominador sigue estando, implícito.

## Copy de la tabla: los tres textos que Jon puso en duda (5-ago)

Jon: *"No creo que los copys de los tags sean los mejores… igual que el nombre de esa columna"* y *"el número de people affected tampoco sé si es mejor texto, o warning u otro"*.

**Regla que aplico, para no volver a inventar palabras:** el nombre del criterio en el tag es **el mismo que la tarjeta de ajustes que el admin acaba de tocar** (`course-settings/state.ts:771-787`), no un sinónimo mío.

| Ajuste real | Tag antes | Tag ahora | Por qué |
|---|---|---|---|
| "Pass the knowledge test" / "Minimum score to pass" | `Knowledge test 48%` | `Knowledge test 48%` | ya coincidía |
| "Complete all LMS modules" / **"Minimum quiz score"** | `Quizzes 75%` | `Quiz score 75%` | "Quizzes" no existe como ajuste; el ajuste es *quiz score* |
| "Attend sessions" / "Minimum attendance" | `Attendance 60%` | `Attendance 60%` | ya coincidía |
| "Complete all LMS modules" | `LMS modules unfinished` | `LMS modules 6 of 8` | rompía la gramática: tres tags decían *dónde está la persona* y este decía *un estado*. Con la fracción los cuatro se leen igual: criterio + dónde está esa persona |

**Cabecera de la columna de tags: `What they no longer meet` → `Below the new criteria`.**
La vieja es falsa en el sujeto: la persona no ha dejado de cumplir nada, su 48% es el mismo de ayer — lo que se ha movido es el listón. La nueva dice la relación (por debajo) y el causante (*new*), es genérica a umbrales y a módulos, y hace que el número del tag solo pueda leerse como *el de la persona* — sin gastar más palabras dentro del tag. Es jerarquía haciendo el trabajo, no prosa.

**El número de la columna 2: texto, no warning.** Descartado el `alertTag` ámbar: **todas** las filas están afectadas, así que un tag de alarma por fila no discrimina nada — el rojo que está en todo no significa nada (R7). La alarma es del título del diálogo, no de cada celda. Lo que le falta a la celda no es color, es **denominador**: 5 de 8 y 5 de 40 son decisiones distintas. Eso ya estaba decidido más arriba en este gate ("la proporción va en la columna de riesgo") y se perdió al reconstruir. Se restaura `5 of 8`, sin el glifo ⚠ (también se repetía en todas las filas).

**Cabecera de la columna 2: `People affected` → `No longer completed`.** "Affected" no dice qué les pasa; esta columna es el **output** de marcar la casilla. Aquí sí es correcto el "no longer": el estado *sí* cambia (estaban Completed y dejan de estarlo). No digo a qué estado van — que la baja del KT deje el curso *in progress* es deuda de producto que Jon aparcó, y afirmarlo sería inventar.

**Overflow `+1`:** no era `max` (por defecto 4, `F0TagList.tsx:12`), era ancho — `OverflowList` mide el espacio. El diálogo pasa a `xl`; comprobado en pantalla que **no basta**: con el diálogo a ~960px la columna de criterios se quedaba en ~320px y Clara Soler (3 criterios) seguía saliendo como `Knowledge test 69% +2`. Un tag mide ~140px, así que hacen falta ~450px. Se reparte con `width` por columna, que la tabla soporta (`OneDataCollection/__stories__/index.stories.tsx:1613`; en tablas anidadas la primera columna va a 300, `mockData.tsx:373`): grupo 300, contador 150, y la de criterios se queda el resto. Sin ancho explícito el orden de las columnas decide quién se queda sin sitio, y era justo la que Jon quería leer.

**El techo es real y obliga a decidir, no a empujar píxeles.** `F0Dialog` no tiene nada más ancho que `xl` (`F0DialogInternal.tsx:53` → `max-w-[960px]`, 928 de contenido). Medido: el nombre de grupo pide 194px de texto + 48 de chevron y padding; la cabecera `No longer completed` pide 139 + 24; y `OverflowList` **reserva siempre** el hueco del contador (33 + 8) antes de decidir, así que tres tags de ~420 necesitan 460 de caja. Suma: 46 + 250 + 165 + 496 = **957 > 928**. Con las tres cosas enteras no cabe, así que se paga donde menos cuesta:

1. **Los nombres de grupo de esta tabla eran inventados y distintos de los del resto del prototipo** ("Edición Q2 2026 · Remote EU" contra "Edición - enero 2026", que es como se llaman los grupos en el clon del producto real, `QuizzesKtContent.tsx:666-823`). Se alinean con los reales: coherencia primero, y de paso 20px menos.
2. **Cabecera del contador `No longer completed` → `Lose completion`.** Misma idea (el output de marcar la casilla), 30px menos. La frase la completa la celda: *5 of 8 · lose completion*.
3. **El tag de módulos usa notación de progreso: `LMS modules 5/8`.** No es incoherencia con el `5 of 8` del contador: ahí son personas de una población (se leen "5 de 8 personas"), aquí es un avance sobre 8 módulos, que en producto se escribe como fracción.

Con eso: grupo 230 + contador 130 + criterios 522 (486 útiles ≥ 458 que piden tres tags) y sin scroll horizontal. Si Jon prefiere la cabecera larga antes que ver el tercer tag, el cambio es de una línea — pero es su decisión, no algo que yo esconda.

Medido en el DOM con el reparto 230/170: la celda de criterios deja **446px** útiles y los tres tags de Clara piden ~450 (154 + 150 + 130 + los huecos). Falla por menos de 10px, así que el grupo baja a 210 → ~466 útiles. Comprobar además que el nombre de grupo más largo ("Edición Q2 2026 · Remote EU") no se corta a 210.

Anchos aplicados: grupo 230 (el nombre más largo mide 171 y entra), contador **140** — a 130 la cabecera se cortaba por 3px, medido en el DOM. A comprobar en pantalla tras el reparto final (230/130/522): que la cabecera del contador no se corta, que el nombre de grupo más largo ("Edición - noviembre 2025") entra entero, y que Clara Soler enseña sus **tres** tags sin `+1`.

## La fila crece y los porqués se apilan — la idea de Jon, que rechacé mal (5-ago)

Jon lo propuso hace dos vueltas: *"quizás debería ser una frase por línea y que crezca el row en vertical"*. Le contesté que `F0TagList` es de una sola línea (`OverflowList`) y que montar la lista a mano está prohibido. Eso era verdad **de los tags**, no de su idea: en el catálogo existe la celda **`longText`** (`ui/value-display/types/longText/longText.tsx`), que renderiza `whitespace-pre-wrap` y con `full: true` no trunca — la fila crece. Rechacé la idea por una limitación del componente que había elegido yo.

**Y su versión es mejor que mis columnas por criterio, por un motivo de la tarea:** el admin **no compara personas**, decide por grupo — las casillas son de grupo. La columna alineada solo paga si alguien barre valores para comparar; aquí nadie lo hace. A cambio costaba: cabeceras que se cortan (`Quiz score ≥10…`), tres o cuatro columnas que no caben en 928px, y la rejilla medio vacía de su última captura.

Cabecera de esa columna: **`Below the new criteria`**, no `Why`. `Why` era mi taquigrafía de la frase de Jon (*"apilar los porqués"*), no un nombre de columna: no dice de qué habla y ninguna tabla del producto rotula así. `Below the new criteria` dice la relación y el causante, es genérica a umbrales y a módulos, y encaja con lo que hay dentro de la celda, que termina en *needs 90%*. Descartada `Criteria not met`: pasiva y no dice que el criterio sea nuevo.

**Forma final (5-ago), después de R16–R19.** El porqué de cada persona son **los nombres de los criterios que no alcanza, y nada más**: tags de nombre (categoría = uso legítimo del tag), sin cifras, en una sola columna. El listón de cada criterio se dice **una vez arriba**, con su antes → después, en un `DetailsItemsList` (`@factorialco/f0-react/dist/experimental`, `tableView`), que es lo que calcula `changedCriteria()` y nunca se había pintado.

Cabecera del contador: `No longer completed` (fuente en R15), 180px. Bloque del cambio: `DetailsItemsList tableView` con una fila por criterio tocado, `content: { type: "item", text: "50% → 90%" }` (contrato leído en `experimental/Lists/DetailsItem/index.tsx` y en su story). **El bloque del cambio, fuera (Jon, 5-ago):** *"la tabla de encima sobra, ¿para qué poner de nuevo lo que acabo de seleccionar?"*. Es un recap de su propia acción de hace dos segundos, con la pantalla de ajustes detrás del modal: no explica nada que el admin no acabe de hacer. Se elimina. Lo único que lo devolvería: un guardado que arrastre **3-4 cambios** hechos en tarjetas distintas con scroll de por medio — ahí deja de ser recordatorio y pasa a ser el diff de lo que se va a guardar.

`DetailsItemsList` se importa de `@factorialco/f0-react/dist/experimental`, que está en la lista blanca del skill (`f0-prototype/SKILL.md:715`). La entradilla ya se queda solo con la pregunta: la frase *"some people… and the rest"* se cae porque miente cuando caen todos (`8 of 8`).

Descartado (para no volver atrás): una línea por criterio con valor y listón:

```
Knowledge test 69% · needs 75%
LMS modules 5 of 8 · needs all 8
Quiz score 55% · needs 80%
```

- Cada línea se explica sola: criterio + dónde está esa persona + el listón nuevo. No depende de la cabecera de al lado ni de emparejar nada.
- **Se acaba la pelea de anchos**: una columna, cualquier número de criterios, sin truncar y sin scroll horizontal. El caso de cuatro criterios deja de ser un problema de layout.
- El *xké* por combinatoria queda dicho persona a persona, que es lo que pidió Jon.

Coste asumido: las filas de quien falla en tres cosas miden tres líneas, así que la tabla es más alta. Se queda dentro del scroll vertical del diálogo, que ya estaba.

## Lo que se probó antes: columnas por criterio (superado por lo de arriba)

Jon, dos veces: *"¿y ahora por qué has decidido poner porcentajes dentro del tag?"* y *"sigo creyendo que el tag con números y cosas queda raro"*. Tiene razón y el motivo es de lenguaje, no de gusto:

- En F0 un tag es una **etiqueta categórica**: un estado, un tipo, un nombre. `Knowledge test 69%` dentro de una píldora se lee como *estado*, y no es un estado: es una **medida**.
- Metida en una píldora, la medida deja de ser comparable: cada número cae en una x distinta según lo que mida el texto de al lado, así que no puedes barrer la columna con la vista. Números = columna alineada. Eso es lo que hace el producto con cualquier dato numérico.
- Y la píldora añade peso visual (borde, fondo) a lo que no es una señal de estado.

**Estructura nueva: una columna por criterio que ha cambiado.** Nada de tags.

| Group | Lose completion | Knowledge test · min 75% | LMS modules · all 8 | Quiz score · min 80% |
|---|---|---|---|---|
| Edición - noviembre 2025 | 7 of 12 | | | |
| ↳ Clara Soler | | 69% | 5 of 8 | 55% |
| ↳ Hugo Vidal | | 72% | | |

Por qué esto resuelve lo que llevo fallando:

1. **La correlación es estructural, no tipográfica.** El criterio lo dice la cabecera y el valor está debajo. No hace falta emparejar nada dentro de una píldora (el popurrí de `Result`) ni concatenar `66% · not finished`.
2. **El *por qué* está en la cabecera, sin prosa.** `Knowledge test · min 75%` sobre un `69%`: no hace falta explicar nada. Esto es lo que cierra `changedCriteria()`, que llevaba codificado y sin pintar, y la petición de Jon de que el modal diga el *xké* según la combinatoria.
3. **Es genérico de verdad.** Las columnas se generan de los criterios que han cambiado **y se han vuelto más estrictos**: si solo subes el KT hay una columna; si además exiges módulos, hay tres. Un criterio que no has tocado no aparece nunca.
4. **La celda vacía significa "en esto va bien".** El vacío informa; no hay que teñir nada.

Medido en el DOM (fuente real de la tabla): la cabecera más larga, `Knowledge test · min 75%`, pide **170px**; con columnas de 150 se cortaban las tres. Se quita el punto medio (`Knowledge test min 75%` = 161) y cada columna lleva el ancho que pide su propia cabecera: KT 185, módulos 145, quiz 155, attendance 165. Con tres criterios: 899 de 928, sin scroll y sin cortar nada. El ancho va dentro de la definición del criterio, no suelto en la tabla (aplicado). Tercera medición y decisión: con `min 75%` la suma de lo que **piden** las cabeceras es 936 > 928, así que con tres criterios algo se corta siempre. El listón pasa a notación de umbral — `Knowledge test ≥75%` (144 en vez de 163) — y entonces cabe: 46 + grupo 230 + contador 140 + 185 + 160 + 155 = **916 de 928**. La frase amable está en el título y la entradilla del diálogo; una cabecera de columna es el sitio donde un símbolo de umbral se lee bien. Si Jon prefiere `min 75%`, el precio es scroll horizontal con tres criterios.

Segunda medición: la celda de cabecera se come **32px** (padding + hueco del orden), no 24, así que los anchos suben a KT 195 / módulos 155 / quiz 165 / attendance 175, y el grupo baja a 225 (su nombre más largo pide 219) para que la suma quepa en 928 sin scroll.

Coste conocido: si los cuatro criterios se endurecen a la vez, cuatro columnas + grupo + contador pasan de 928px y la tabla scrollea en horizontal (el componente lo hace de serie). Es el caso raro y el escalón menos malo: antes de esconder un dato, que se pueda desplazar.

De paso: `itemsWithChildren: () => true` ponía un chevron muerto en **cada persona**. Pasa a `(item) => item.wouldFail !== -1`.

Implementación (hecha): la fila hija lleva su `person`, y cada columna de criterio pinta `criterion.valueFor(person)` — una sola fuente de verdad (`stricterCriteria`) para las columnas, para quién sale en la lista y para el recuento.

**Defecto que Jon ve en pantalla (5-ago): `Quiz score ≥10…`.** Fijé los anchos midiendo umbrales de **dos** dígitos (`≥80%`); con `≥100%` la cabecera ya no entra y se corta. Es el mismo fallo de método de siempre: medir un caso y darlo por bueno para todos. El ancho deja de ser una constante y se calcula de la propia cabecera (`largo del texto × 7.8 + 38`), así que aguanta `≥5%`, `≥100%` y cualquier etiqueta futura.

Lo que eso saca a la luz, y que es información para la decisión, no un detalle: **con tres o cuatro criterios endurecidos a la vez, el contenido no cabe en el diálogo más ancho del catálogo** (928px útiles frente a ~936 que piden grupo + contador + tres cabeceras). O la tabla scrollea en horizontal, o esto no vive en un modal. Elijo scroll antes que cortar un dato, y lo dejo escrito porque si el caso normal fuese cambiar varios criterios de golpe, la conclusión correcta sería sacar esta decisión del modal — no seguir apretando píxeles.

**Defecto encontrado al probar el caso de un solo criterio** (apago LMS, solo sube el KT): las columnas y los recuentos se actualizaban (4 of 12) pero **las filas de personas seguían siendo las de la vez anterior** — Lucía, Marc y Bea aparecían con todas las celdas vacías, es decir, listadas como afectadas sin ningún motivo. Causa: los hijos se cachean por expansión y la tabla no se reconstruye al cambiar los criterios. Arreglo: la tabla se monta de nuevo cuando cambia el snapshot de criterios (`key`), que limpia expansión y caché. Sin esto, el modal miente en cuanto tocas dos veces los ajustes.

## La causa es el ajuste tocado, no la tarjeta (Jon, 5-ago)

Jon: *"si antes cumplías por lms y te han subido el % de quiz score: fallas por score. Si no cumplías lms y ahora es required, suspendes por eso. Si cumplías por lms y por quizz, depende el nuevo %."*

Eso tira mi propuesta de fusionar módulos y quiz en la tarjeta ("Complete all LMS modules"): dentro de la misma tarjeta, **la causa de cada persona es distinta**, y hay que decir cuál. Regla que sustituye a mi criterio de cada rato:

> El tag lleva **el nombre del ajuste que el admin ha cambiado** y que esa persona no cumple.

**Los tags se quedan como estaban** (Jon, 5-ago: *"los tags deberían ser los que teníamos, no entiendo para qué sacar diferentes"*): `Knowledge test`, `LMS modules`, `Quiz score`, `Attendance`. Ya distinguen sus tres casos — `LMS modules` cuando no tenía los módulos, `Quiz score` cuando le sube el mínimo — así que pasar a los seis nombres largos del ajuste (`Minimum quiz score`, `Pass the knowledge test`…) no añadía precisión, solo otro cambio de palabras. Lo que sí queda de la regla: **la causa es el ajuste tocado, no la tarjeta**; módulos y quiz no se fusionan.

Y el anidamiento del producto queda respetado: el mínimo de quiz **vive dentro del toggle de LMS**, así que solo cuenta si LMS está activo; encender LMS activa las dos cosas de golpe.

## Las dos direcciones en una sola tabla (Jon: "probemos así", 5-ago)

Relajar un umbral tiene consecuencia igual que endurecerlo, pero sobre **la población contraria**: quien no tenía el curso completado puede pasar a tenerlo. Callarlo es peor que en el otro sentido, porque reparte aprobados sin avisar.

**Por qué no se parte en dos modales ni en dos secciones con casillas propias:** aplicar las nuevas condiciones a un grupo es **un solo acto** — no puedes quedarte los aprobados nuevos y rechazar los que caen, es la misma re-evaluación. Partirlo ofrecería una elección que el sistema no puede cumplir (el mismo error que enseñar el % por persona). Y encadenar modales te hace aprobar el primero sin saber qué dice el segundo.

Forma: **un modal, una tabla, una casilla por grupo**, y hasta dos columnas de consecuencia que **existen solo cuando tienen contenido** — si el guardado solo endurece hay una, si solo relaja hay la otra, y en el mixto las dos. Nunca hay columna vacía; descarté antes la segunda columna suponiendo que lo estaría, y solo aparece cuando no.

Las columnas hacen doble trabajo, y por eso desaparece la columna suelta de condiciones: en la fila del **grupo** la celda lleva el recuento (`6 of 8`), y en la fila de la **persona** los tags de las condiciones que provocan su cambio. Así el rótulo de la columna ya dice la dirección de cada persona y no hay que inventar una cabecera que sea verdad para los que caen y para los que suben a la vez (`Conditions not met` era falsa para estos últimos).

Implementación (hecha): `meetsAll` (todas las condiciones con AND), `looserCriteria` como espejo de `stricterCriteria`, `unblockedFor` (qué condición le bloqueaba y ya no) y `gainingIn` sobre una población nueva de **no completados** (`UNFINISHED_PEOPLE`), que antes no existía en el prototipo.

La tabla se monta con `wouldFail`/`wouldPass` por grupo y los hijos son los dos conjuntos con su `direction` (hecho). Denominadores distintos por dirección: los que caen se cuentan sobre los **completados** del grupo, los que suben sobre los **no completados**. Cálculo, con la asimetría que hay que respetar: para que alguien **caiga** basta la condición endurecida (ya cumplía todo lo viejo); para que alguien **suba** hay que evaluar **todas** las condiciones, porque van con AND.

El modal se abre si el cambio mueve a alguien **en cualquiera de las dos direcciones** (antes solo contaba a los que caían, así que un cambio que solo relajaba guardaba en silencio). Título ya cambiado. El aviso del pie refleja la selección en las dos direcciones (quita y da), no solo lo que quita. Las dos columnas antiguas (`No longer completed` fija y `Conditions not met` aparte) se retiran: la primera pasa a ser condicional y la segunda desaparece porque su contenido vive ya dentro de la columna de la dirección.

## Las personas salen del modal — con la prueba en pantalla (Jon, 5-ago: "esto no puede verse así nunca")

Captura de Jon con el quiz subido al 100: **22 de 25** pierden el completado y, al abrir un grupo, siete filas de personas. Cuatro defectos, todos con la misma causa:

1. La decisión son **3 casillas** y quedan sepultadas bajo la lista de gente.
2. Vuelve el `+1`: quien falla dos condiciones esconde una.
3. Franja vacía a la izquierda: la columna del chevron reserva sitio y empuja checkbox y nombre al centro.
4. El total sale dos veces, en el título y en el aviso del pie.

Los cuatro se caen quitando las personas, que es lo que ya había recomendado dos veces por lógica (la decisión es binaria y por grupo; desde aquí no se puede actuar sobre nadie) y que ahora tiene evidencia visual.

Queda: título + pregunta + una fila por grupo con su recuento y con **`Caused by`** (las condiciones que provocan el cambio en ese grupo), casilla, y los dos botones. El porqué sigue dicho — sin listar a nadie. El "quién" vive en la ficha del grupo, donde sí se puede actuar sobre una persona.

`causesIn` da esa unión de condiciones por grupo (lo que hace caer a unos y lo que desbloquea a otros), sin nombres. El `F0Alert` del pie **vuelve** (Jon, 5-ago: *"cuando selecciono grupos no me dice qué cambios se van a aplicar abajo como teníamos antes"*). Lo quité por redundante con el título y no lo era: el título da el **total posible**, el aviso da el efecto de **lo que has marcado**, que es lo que estás a punto de firmar. Dice las dos direcciones de la selección (`6 people stop being marked as completed · 2 people become completed`) y solo es `warning` si algo se quita.

## Las personas vuelven: lo roto era el layout, no que estuvieran (Jon, 5-ago)

*"¿Y por qué ahora no sale cada persona de cada grupo?"*. Leí su "esto no puede verse así nunca" como que sobraban las personas, y no era eso: eran los **defectos de layout**. Vuelven, y se arreglan las causas:

| Defecto | Causa real | Arreglo |
|---|---|---|
| Franja vacía a la izquierda, tabla "a medias" | **todas** las columnas tenían ancho fijo y la suma (626) era menor que el contenedor (928); el sobrante se iba a un hueco delante | la **última** columna nunca lleva ancho: se queda el sobrante |
| `+1` en quien falla dos condiciones | la columna de la dirección se quedaba en ~165px | 230px cuando conviven las dos direcciones; dos tags miden 228 |
| Muro de filas | solo aparece si **tú** expandes un grupo; es tu decisión, no el estado por defecto | se queda |

Anidamiento ya restaurado (hijos = quien cae + quien sube, con su `direction`). Los tags de la persona se pintan con un único helper (`tagsOf`) para las dos direcciones, así que el nombre de la condición sale del mismo sitio en los dos casos. Regla de anchos que queda escrita para no repetir el fallo: **grupo 240 fijo** (a 220 se cortaba "Edición - noviembre 2025": el nombre mide 171 y la celda se come 56 entre chevron y padding), **la columna de dirección 230 solo cuando conviven las dos, y la última sin ancho**. Y el `Caused by` de grupo se retira: con las personas dentro es el mismo dato resumido, y era justo lo que robaba el ancho que provocaba el `+1`. El porqué vuelve a estar donde se puede leer una persona a una.

## `What changed` no se lee con varias condiciones (Jon, 6-ago)

Cada línea empaquetaba **cuatro datos** (condición · su valor · listón viejo → nuevo) y con dos o tres líneas nada queda alineado: no puedes comparar ni barrer. El arreglo no es acortar el texto, es **darle columnas** — una fila por condición, colgando de la persona:

```
▾ Ana Vidal            Completed → In progress
    Quiz score              84%        80% → 90%
    Attendance              88%        75% → 90%
▾ Nerea Costa          In progress → Completed
    Knowledge test          44%        50% → 40%
```

Persona = fila padre con su transición; condición = fila hija con **su valor** y **cómo se movió el requisito**, cada cosa en su columna.

**Y las columnas no crecen por caso** (Jon: *"solo estás teniendo en cuenta 2 casos y podían ser más, no veo meter aún más columnas"*). Mi primera versión asumía que todo cambio es un **umbral**, así que la columna se llamaba `Minimum` — y con un **toggle** (`not required → required`) esa cabecera miente. La columna pasa a ser **genérica**: `Requirement`, que aguanta las dos formas sin inventar una columna por tipo de cambio. Tres columnas fijas: condición · su valor · cómo se movió el requisito.

Cada persona solo lleva **las condiciones que la mueven**: un guardado puede tocar cuatro y tres serle indiferentes (a Ana le salía `Knowledge test` cuando a ella la tumban el quiz y la asistencia — corregido). Es el mismo patrón anidado que ya funcionaba en el modal, y aquí resuelve justo lo que no se leía.

## Dos correcciones más del banner y del panel (Jon, 6-ago)

**El copy que yo mismo había llamado malo lo dejé a medias.** Cambié "people → participants" y "completed → `Completed`", pero mantuve **un punto medio uniendo dos hechos opuestos** en el título (`5 no longer Completed · 1 now Completed`), que es el vicio que había criticado en el modal. Forma final: **un número y una idea** en el título — `6 participants changed status` — y el **desglose + el sello** en la línea secundaria, que es para lo que existe (`F0Alert.tsx:96-102`: la descripción se pinta en `text-f1-foreground-secondary`, y la story `Variants` usa exactamente título corto + descripción + acción).

**Y la metadata de un sidepanel tiene su patrón, que no era el que usé.** Está en la story del propio diálogo: **`WithResourceHeader`** (`patterns/F0Dialog/__stories__/F0Modal.stories.tsx:388`) — un `F0Dialog position="right"` cuyo **primer hijo es un `ResourceHeader`**, que es el componente con hueco de `metadata`. `F0Dialog` no lo tiene. Así que fuera el `DetailsItemsList` y fuera la metadata encajada en la descripción: el panel se encabeza con `ResourceHeader` (título = el grupo; metadata = `Changed on`, `Changed by`, `Status changes`).

## Los mínimos en la cabecera del grupo: cuatro items, no uno (6-ago)

Salieron de las cabeceras de columna porque **yo había fijado los anchos a mano y para que cupieran los títulos**, no por el contenido: columnas de 200px con un `84%` dentro, `Team` estrecha, y scroll horizontal de regalo. Fuera todos los anchos (el componente reparte por contenido) y cabeceras cortas.

Los mínimos pasan a la **metadata de la cabecera del grupo**, con las demás propiedades (fechas, participantes, instructores, presupuesto). Intentos y por qué se caen:

| Intento | Por qué no |
|---|---|
| Un valor de texto: `All 8 modules · Quiz ≥80% · Attendance ≥75% · Knowledge test ≥50%` | cuatro hechos metidos en un hueco pensado para **un** valor, con gramática mezclada |
| `type: "tag-list"` con los cuatro | **colapsa**: sale `All 8 modules +3` y esconde tres. Cualquier valor de lista con más de un elemento se esconde tras un contador (`Headers/Metadata/index.tsx:120-121`) — y esconderlos es lo contrario de "tenerlos a mano" |
| **Cuatro items de metadata** (elegido) | es la forma del contrato: etiqueta → un valor. `Modules All 8`, `Quiz score ≥80%`, `Attendance ≥75%`, `Knowledge test ≥50%` |

## El registro necesita fecha y autor (Jon, 6-ago)

*"Si falta la data de cuándo y dónde, incluso el copy del banner debería decir la fecha y un copy coherente."*

El banner y el panel son **el único rastro** que queda de un cambio de estado (decisión 7 del RFC: el re-check no deja registro). Un rastro sin fecha ni autor no responde a la única pregunta que se le va a hacer: *"¿por qué he perdido el curso?"*.

**Y el primer intento metía metadata en un hueco de frase** (Jon: *"lo de abajo no es metadata de header?"*). Corregido:

- **Banner**: `F0Alert` tiene `title` **y** `description`, y yo tenía los dos hechos apelotonados en el título con un punto medio, con `description` vacío — y en el orden equivocado, la fecha delante de la consecuencia. Ahora: título = **la consecuencia** (`5 people are no longer completed and 1 is newly completed`), descripción = **el sello** (`Completion conditions changed on 6 Aug 2026 by Hellen the HR`).
- **Panel**: `Edición - enero 2026 · changed on 6 Aug 2026 by Hellen the HR` eran **tres pares etiqueta-valor disfrazados de frase**. `F0Dialog` no tiene `metadata` (solo `title`/`description` como strings), así que la metadata va **dentro**, con `DetailsItemsList` — `Group`, `Changed on`, `Changed by` — y el título se queda en `Who changed`.

Y de paso se arregla la incoherencia que había entre los dos: el banner contaba "5 y 1" y el panel "6 people". El recuento agregado se queda donde vive de serie (el resumen de la tabla) y la cabecera pasa a llevar el sello del cambio.

Lo que esto pide fuera del prototipo: guardar **fecha y autor** del cambio de ajustes, además del umbral por membresía que pedía Álvaro. Es lo mismo que ya estaba anotado como pregunta para eng, ahora con una razón visible en pantalla.

## Feedback de Álvaro en DM (6-ago, 12:58-13:01)

Textual, del hilo con Jon:

1. *"Estaría guay poder poner en las KT y Quiz el threshold… en plan 50% del 75%"*.
2. *"El % de las settings con el que el usuario contestó. Podría darse el caso que haya empleados con un % diferente si cuando hacen un cambio en el setting deciden no aplicarlo a los que ya tenían el curso completado. Entonces puede darse el caso que haya participantes cuyo % es diferente y creo que si no lo mostramos será confuso"* + *"saber contra qué comparamos y tenerlo a mano es mejor que ir al setting a mirarlo"*.
3. *"Si está por ejemplo pending el KT debería poner pending tmb"*.
4. *"Si las sesiones son el 70% y te falta una que no ha llegado, pues quizá de alguna forma que tengamos esa info"*.

**El punto 2 confirma la pregunta que estaba abierta para eng**: el mínimo no se lee del curso al pintar la fila, queda **fijado en la membresía** cuando se juzga. Si el admin decide no aplicar el cambio a los ya completados, esas personas conservan su mínimo viejo — y entonces en la misma tabla conviven umbrales distintos. Sin enseñarlo, dos filas con el mismo 60% significan cosas contrarias.

**Dónde va el umbral: en la cabecera, no en cada celda** (Jon, 6-ago: *"el mínimo o el requerido puede ir en la columna, no en cada celda"*). Y hay razón de modelo, no solo de ruido: la regla de Álvaro es que **dentro de un grupo todos comparten condiciones**, así que en la tabla de un grupo el umbral es **uno** → cabecera `Quiz score · min 80%`. Repetirlo por fila era el mismo error que el `needs 90%` del modal.

Su caso de "participantes con % diferente" se da en la lista de participantes **del curso**, que cruza grupos: ahí conviven dos umbrales y el dato **sí** tiene que viajar por fila (o en una columna "Judged with"). Dos pantallas, dos sitios — y mis fixtures estaban mal, porque tenían un mismo grupo con gente juzgada a 50 y a 75, lo que la regla de homogeneidad no permite.

**Y el detalle fino va al panel** (Jon: *"para aún más detalles de cuánto tenía antes del cambio o lo que sea, tenemos el sidepanel"*). Reparto final de las tres superficies:

| Superficie | Qué lleva |
|---|---|
| Modal de guardado (B) | grupos alcanzados + cuántos completados / en curso. Ninguna cifra de impacto |
| Tabla del grupo | el umbral **una vez** en la cabecera, y el valor de cada persona en su celda |
| Panel "quién cambia" | por persona y condición: **su valor y cómo se movió el listón** (`Quiz score 84% · min 80% → 90%`) |

Ahí la verbosidad se paga sola: es una lista corta, se abre a petición, y es el único sitio donde hace falta el antes y el después.

Cómo se aplica en la tabla:

| Columna | Antes | Ahora |
|---|---|---|
| Quiz score | `84%` | `84% · min 80%` — el mínimo **de esa persona** |
| Knowledge test | `52%` | `52% · min 50%`, y **`Pending`** cuando no lo ha hecho |
| Attendance | `88%` | `88% · min 75%`, y **`1 session left`** cuando quedan sesiones por celebrar |

El caso 4 obliga a separar dos cosas que no son lo mismo: **asistencia perdida** (sesión celebrada a la que no fue) y **sesión que aún no ha llegado**. Un 70% con una sesión pendiente puede acabar en 100%; sin ese dato, el admin lee un suspenso que quizá no lo es.

## Nos quedamos con B, y el detalle se va al grupo (Jon, 5-ago)

*"Vamos a quedarnos de momento con la versión simple, pero tenemos que meter en el side panel del grupo la info como teníamos con el banner con el click, y ahí enseñar todo el pescado."*

Reparto de responsabilidades que queda:

| | Modal de guardado (B) | Ficha del grupo |
|---|---|---|
| Pregunta | ¿aplico las nuevas condiciones a los que ya están? | — |
| Dato | grupos alcanzados + cuántos completados / en curso | **quién** cambia y por qué condición |
| Coste | contar estados existentes | evaluar ese grupo, y solo cuando el admin lo pide |

Esto además arregla el argumento de coste: el cálculo caro deja de hacerse **para todos los grupos al guardar** y pasa a hacerse **para un grupo cuando alguien lo abre**.

Superficie: banner en la ficha del grupo con su acción → `F0Dialog position="right"` (sidepanel), que es el patrón del producto para el detalle de una fila (`modules/trainings/.../Budgets/.../Detail/index.tsx:73`).

**El panel no se entendía** (Jon: *"no entiendo la info del sidepanel, ¿qué es change? ¿qué es no longer completed? ¿por qué no has puesto diferentes ejemplos?"*). Dos fallos míos:

1. `Change` no dice nada, y `No longer completed` a secas obliga a adivinar de qué estado a qué estado. Pasa a leerse como **transición explícita**: `Completed → In progress` y `In progress → Completed`, bajo la cabecera `Status change`. Sin vocabulario que interpretar.
2. **Todos los ejemplos eran iguales** (cuatro veces lo mismo, todos por `Knowledge test`) porque el escenario fijo del grupo solo producía pérdidas. El escenario pasa a ser **mixto** —quiz 80→90 y KT 50→40— así que el panel enseña las dos direcciones y dos condiciones distintas.

Cautela dicha: llamar `In progress` al estado resultante es coherente con la tabla de este prototipo, pero el enum real tiene `partiallycompleted` y `started` (`trainingLearner.ts:21`); cuál queda exactamente es pregunta para Yara.

Contenido del panel: una fila por persona con **el cambio** (`No longer completed` / `Newly completed`, estados del producto) y **las condiciones** (tags de nombre). Aquí no se meten cifras dentro de los tags (R19 sigue en pie) ni el % exacto (R17): "todo el pescado" es la lista completa de quién cambia y por qué, que es justo lo que B ya no enseña.

**Y la ficha del grupo también me la inventé, teniéndola clonada al lado** (Jon: *"ya teníamos una putamente hecha"*, *"no has respetado ni el puto fondo"*). Mi error de método fue doble: dije que no era recuperable **sin buscarla en los otros prototipos**, y me fui al código del producto en vez de a la pantalla ya montada.

Está aquí, y es la que se porta verbatim:

> `~/code/f0-factorial-campus/src/prototypes/automated-enrollments-v2/AutomatedEnrollmentsV2.tsx:5307` — `TrainingGroupDetail`
> Estructura: **`Page` con `header={<><PageHeader breadcrumbs/><ResourceHeader/><Tabs/></>}`** y el cuerpo dentro de **`StandardLayout`**. Eso es lo que da el fondo y el encuadre que yo había roto: yo metí el `ResourceHeader` **dentro** del layout, así que ni fondo ni cabecera pegada.
> `ResourceHeader` metadata: `Start date`, `End date`, `Participants`, `Instructor(s)`, `Training budget`.
> Tabs: `Sessions · Participants · Materials · Documents · Costs`, con `key={activeGroupTab}` y `onClick` que reescribe la URL.
> `GroupParticipantsTab` (`:5361`): `search` sincronizado, paginación de 10, `Add participants`, `Delete` por fila (crítica), bulk `delete-memberships`, resumen `N participants`, y columnas **Name · Team · Job title** sin anchos.

La tabla se porta con sus afordancias (buscador sincronizado, páginas de 10, `Add participants`, borrado por fila y en bloque), no solo con sus columnas. El panel derecho del banner cuelga del `Page`, fuera del `StandardLayout`, como cualquier sidepanel de esa pantalla. La misma pantalla existe también en `~/code/f0/packages/f0compose/src/prototypes/training-live-session-participant/TrainingLiveSessionParticipant.tsx:4094`, con las sesiones en vivo encima.

Referencia del producto, que coincide con lo anterior y sirve de contraste:

> `ClassDetailHeader` — `components/Revamp/TrainingsDetail/Classes/ClassDetailHeader/index.tsx:75-140`: `ResourceHeader` con `title` (nombre del grupo), `description`, y **metadata**: `Start date`, `End date`, `Participants` (lista de avatares), `Instructors` (lista de avatares) y `Training budget` cuando lo hay. `secondaryActions`: `Edit` (con icono Pencil) y `Delete`.
> Sub-navegación — `routes/index.tsx:862-905`: **Sessions · Participants · Materials · Documents · Costs**, con Sessions como índice.

El icono de `Edit` es `Pencil`, el mismo que usa la cabecera real, y viene de `@factorialco/f0-react/icons/app`. Lo mío se limita a lo que pide la iniciativa: el banner y las columnas nuevas. Las otras cuatro tabs quedan vacías y **dicho en pantalla** que se perdieron con el destrozo — mejor un hueco honesto que otra pantalla inventada.

**La tabla de participantes del grupo me la había inventado entera** (Jon, 5-ago: *"¿qué mierda de pantalla de participantes es esa? ¿por qué coño es un puto invent entero?"*). La real existe y es esta:

> `ParticipantsTable` — `~/code/factorial/frontend/src/modules/trainings/components/Revamp/TrainingsDetail/Classes/EditClass/ParticipantsTab/ParticipantsTable/index.tsx:163-200`
> Columnas: **Name** (celda `person` con avatar) · **Team** · **Job title**. Acción primaria `Add`, acción de fila `Delete` (crítica), bulk `Delete`.

Eso es lo que hay hoy, y no tiene ni estado ni progreso. Luego lo que pidió Jon (*"en la tabla del participante quizás tener mejor información: el estado, progreso del LMS, del SCORM, del attendance"*) **no es una tabla nueva: es una propuesta de columnas nuevas sobre la real**. Se monta así: primero las tres reales, verbatim, y detrás las añadidas — para que en la revisión se vea qué es producto de hoy y qué propone la iniciativa.

Los fixtures ya llevan `team` y `jobTitle`, porque son parte de la tabla real. Y con ellas van sus acciones reales, también verbatim (`ParticipantsTable/index.tsx:90-127`): `selectable`, acción primaria **Add**, acción de fila **Delete** (crítica) y **Delete** en bloque. Sin eso no es un clon, es un dibujo. (Contrato leído: a nivel de `source` una acción en bloque lleva `id` y la maneja `onBulkAction`, no un `onClick` en línea — `OneDataCollection/__stories__/index.stories.tsx:1204`.) **La tabla no era lógica** (Jon: *"¿cómo coño tienes status In progress pero SCORM completed, módulos 8 y 100%?"*, *"no veo sentido a nada"*). Tres fallos, todos de coherencia:

1. **Faltaba la columna que explica la fila.** Nerea sale *In progress* con módulos completos y asistencia al 100% porque le falla el **KT (44 < 50)** — y el KT no estaba en la tabla. Sin él la fila es imposible de leer, y el panel (`Quiz score`, `Knowledge test`) no tiene dónde anclarse. Entran **Quiz score** y **Knowledge test**.
2. **SCORM y módulos son excluyentes**: `Training#scorm_training?` = `scorm_package&.complete?` (`models/trainings/training.rb:459`). O el contenido es un paquete SCORM, o son módulos. Este curso tiene 8 módulos → **no hay registro SCORM**, así que la columna era dato inventado por segunda vez. Fuera. Para verla poblada haría falta un curso SCORM, y entonces la que no aplicaría sería la de módulos.
3. **Todos iguales porque la base lo forzaba**: si completar exige asistencia 100%, todos los completados tienen 100% por definición. La base baja a **75%**, y así los completados varían entre 76% y 100% — con variedad de verdad, no decorativa.

**Comprobado contra el modelo real, y Jon tenía razón: SCORM no es un %** (*"¿estás seguro que es % y no son cosas como empezado, terminado? ¿se devuelve el dato si llevas un 31 o un 56%?"*). Lo que guarda el producto:

| Dato | Realidad | Fuente |
|---|---|---|
| SCORM | dos **enums**: `COMPLETED·INCOMPLETE·UNKNOWN` y `PASSED·FAILED·UNKNOWN`. Ni progreso ni % | `backend/components/trainings/app/models/trainings/scorm_registration.rb:14-27` |
| Módulos / sesiones / KT | `completed` + `total` (**recuentos**) y `knowledge_test_passed` | `public/trainings/value_objects/completion_progress.rb:9-14` |
| Asistencia | `attendance_percentage: Float` por membresía → **sí es %**, y admite decimales | `public/trainings/entities/training_membership.rb:17` |
| Progreso del curso | `progress_percentage: Integer`, **media** de las dimensiones configuradas | `services/trainings/resolvers/progress_percentage_resolver.rb:48-55` |

Luego: SCORM pasa a **tag de estado** (era dato inventado por mí), módulos se quedan en recuento `6 of 8`, y la asistencia se queda en % porque lo es.

**Los % con la celda `percentage`, y solo donde el dato es un %** (Jon: *"¿se usa algún compo en Factorial para ellos? ¿podemos medir esto como %?"*).

- El catálogo tiene `percentage` (`ui/value-display/types/percentage/percentage.tsx`): **anillo de 28px + la cifra**. Es el indicador de porcentaje del sistema, y es el "círculo con el %" que Jon ya había propuesto en otra pantalla.
- Se aplica a **Attendance** (nativo: el ajuste es "Minimum attendance %") y a **SCORM** (nativo: SCORM reporta su `progress_measure`; en el producto el vídeo ya reporta `percentage_watched`, `components/Files/FileViewer/index.tsx:74`).
- **NO** se aplica a `LMS modules`: son módulos **contables**. `6 of 8` es el dato real; el 75% es derivado y esconde la unidad con la que se decide.

**Sin barras** (Jon: *"las barras esas de loading son una puta mierda y no pintan nada"*). Tenía razón por dos motivos: en esta tabla la barra sale **llena en 9 de 11 filas**, así que no discrimina nada; y una barra de progreso en una fila se lee como *cargando*. Las tres columnas van con su cifra en texto: `8 of 8`, `100%`, `100%`. Donde alguien va por detrás, el número ya lo canta (`4 of 8`, `50%`, `80%`).

Columnas añadidas por la iniciativa: `Status` (tag de estado del producto), **progreso de LMS**, **progreso del SCORM** y **asistencia**, los tres con la celda `progressBar` del catálogo (`progressBar/progressBar.tsx`), que es como el producto pinta un avance. Probé a añadir también la **nota del KT** (no estaba en la lista de Jon) y **se cae**: con las tres columnas reales delante, la séptima se sale de la página. Fuera — el porqué de cada persona ya está en el panel derecho, que es su sitio.

Nota honesta: `TrainingGroupDetail` es un placeholder desde el destrozo de ayer, así que se monta una ficha de grupo mínima —cabecera, banner, participantes con su estado— suficiente para alojar esto. La pantalla completa sigue necesitando `/rewind`, que solo puede lanzar Jon.

## Versión B: el modal simplificado (Jon, 5-ago)

Feedback que trae Jon: **capturar toda esa información es un marrón**. La opción más sencilla es decirle *"tienes X grupos con gente completada o con progreso en el curso"* y preguntar *"¿quieres aplicarles la nueva configuración de completion?"*, sin detalle o como mucho `X completed, Y ongoing`.

Consecuencia que hay que respetar para que B sea coherente con su propio motivo: **B no puede enseñar `5 of 8`**. Saber cuántos *cambiarían* exige evaluar a cada persona contra las condiciones nuevas y las viejas — que es justo el cálculo que se quiere evitar. B solo puede enseñar lo que ya está en el registro de cada membresía: cuántos están **Completed** y cuántos **en curso**. La diferencia entre A y B no es de estilo, es **cuánto backend hace falta**:

| | A | B |
|---|---|---|
| Dato por grupo | quién cae y quién sube (`5 of 8`, `1 of 3`) | cuántos hay completados / en curso |
| Cálculo que exige | evaluar cada persona con las condiciones antes y después | contar estados que ya existen |
| Qué sabe el admin | el impacto real antes de firmar | a cuánta gente puede afectar |
| Riesgo | el coste de capturarlo | firmar sin saber el impacto |

Se monta **en el mismo prototipo, con su propia URL** (`?view=completion-settings&v=b`), para poder comparar A y B sin tocar A — mismo patrón que las variantes de FUNDAE.

Tabla y diálogo de B ya montados (`ReachedGroupsTable`), con A intacta detrás de `!variantB`. En B los recuentos van en **texto plano**, no en `alertTag`: no son una consecuencia (nadie ha dicho que esa gente cambie), así que darles peso de alarma sería mentir. La única cifra fuerte de B es la del título. Cuándo pregunta cada una: A abre el modal si el cambio **mueve** a alguien; B, que no sabe el impacto, abre si el cambio **alcanza** un grupo con gente completada o en curso. Vocabulario: `Completed` es el estado del producto (`trainingLearner.ts:21`); para el otro se usa **In progress**, que es como se lee en la ficha del participante, no "ongoing" (que en el producto es un estado del **grupo**, `lib/trainingGroupStatus.ts`).

## La cifra pasaba desapercibida (Jon, 5-ago)

*"El 5 de 8 y el 1 de 3 pasa muy desapercibido"*. Cierto: era `text` plano, con el mismo peso que el nombre del grupo, así que la fila no tenía dónde aterrizar la vista — y es el **único dato que decide**.

Aviso del pie ya restaurado; columna de pérdidas ya en `alertTag` nivel warning. Opciones del catálogo, leídas: `number` (alinea a la derecha en tabla, `number/number.tsx:44`, columna escaneable pero mismo peso) y **`delta`** (`delta/delta.tsx`: flecha arriba/abajo + color positivo/crítico + la cifra). Elijo `delta`.

Y esto corrige mi propio argumento anterior ("nada de ámbar en todas las filas, no discrimina"): entonces **había una sola dirección**, así que el color no informaba. Ahora hay dos en la misma tabla, y el color + la flecha son justo la dirección: abajo/crítico pierde el completado, arriba/positivo lo gana. El color codifica dato, no decora.

**Segunda vuelta (Jon: "sigue pasando desapercibido")**: `delta` sigue siendo **texto**, del mismo cuerpo que el nombre del grupo, solo coloreado — y el nombre gana en peso. Lo que pesa en una fila es un **tag con fondo**, que además es el criterio que Jon ya dio en un caso igual ("huele más a tag rojo… igual en vez de rojo el amarillo"). Se usa `alertTag` (`alertTag/alertTag.tsx`, niveles `info|warning|critical|positive`) para las dos direcciones: **warning** cuando se pierde el completado, **positive** cuando se gana. Un solo componente, dos niveles, y el nivel es dato.

Límite que dejo escrito: en un guardado que **solo** endurece, las tres filas salen del mismo nivel. Ahí el color no discrimina entre filas, pero sigue siendo verdad y sigue dando el peso que le faltaba a la cifra. Si en pantalla resulta excesivo, la alternativa es `number` a la derecha.

## El fallo de raíz: la base no era lo que muestra la pantalla (5-ago)

Jon: *"he probado todo y no sale el mixto"*. La causa no es el UI: la pantalla carga con el toggle de **LMS encendido**, pero `COMPLETION_BASELINE` lo tenía **apagado**. Es decir, la base con la que supuestamente se juzgó a los grupos no era lo que el admin ve. Consecuencias:

- Cualquier guardado arrastraba un endurecimiento **fantasma** (LMS off→on) que Jon no había tocado → siempre había pérdidas, y el caso de solo relajar o el mixto no se podían provocar.
- Y había gente marcada como **completada que no cumplía la base** (módulos sin acabar, quiz por debajo de 80), lo cual es imposible en el producto: si no cumplías, no estabas completado.

Arreglo: la base es **exactamente el estado inicial de la pantalla** (LMS exigido, quiz ≥80, asistencia 100%, KT ≥50), y los 25 completados cumplen todos esa base — su variedad está en los **márgenes** (nota de KT entre 50 y 100, quiz entre 80 y 100), que es lo que hace que subir un umbral atrape a unos y no a otros. Los no completados fallan al menos una condición.

Base ya corregida en `COMPLETION_BASELINE`, los 25 completados reescritos para cumplirla, y los no completados con un comentario por persona diciendo qué condición le falta (para poder provocar cada caso a mano sin adivinar). Tabla ya limpia (sin personas, con `Caused by`). Medido en el mixto: con el grupo a 260 la columna `Caused by` se queda corta y colapsa el segundo tag en un `+1`; el grupo baja a 220 para que quepan los dos (el nombre más largo mide 171 + 48 de sangrado y padding). Con eso los tres casos se provocan a mano y sin trampas: subir el KT → solo pérdidas; bajar el KT a 40 → solo ganancias; subir el quiz a 90 **y** bajar el KT a 40 → mixto.

## Tabla de copys de esta pantalla, con fuente (5-ago)

| String | Trabajo que hace | Fuente | Extremos |
|---|---|---|---|
| `Applying the new conditions changes 23 people in this course` (título) | dar el impacto total, que ahora puede ir en las dos direcciones: el título anterior solo hablaba de los completados y era falso cuando el cambio relaja | `conditions` = palabra de los ajustes | 1 persona → singular; solo endurece / solo relaja / mixto → siempre verdad |
| ~~`20 people already completed this course under the old conditions`~~ (retirado) | dar la **noticia**: existe gente ya completada, y por eso hay que decidir | `completed` = estado del producto (`frontend/src/modules/trainings/constants/trainingLearner.ts:21`); `conditions` = palabra de la propia pantalla de ajustes ("Define the **conditions** participants must meet to complete the course") | 1 persona → singular; caen todas → sigue siendo verdad (un número no miente; `some` sí) |
| `Choose the groups where the new conditions should apply to them too.` | enunciar la decisión, una sola oración | misma fuente de vocabulario | igual en todos los casos |
| `No longer completed` (columna) | el output de marcar la casilla | estado del producto (R15) | `8 of 8` sigue leyéndose |
| `Conditions not met` (columna) | qué condiciones no cumple esa persona | `conditions` = palabra de los ajustes | vale igual para un umbral (69% < 90%) y para un requisito (módulos sin acabar) |

Descartado `Below the new criteria`: **"below" solo es verdad en los umbrales**. A "completar todos los módulos" no se está por debajo, se incumple — el mismo error que `no longer meet`, verdad para la mitad de los casos. Y con `conditions` ya es mal inglés.

El número del título es la **población de la decisión**: los ya marcados como completados en los grupos a los que llega el cambio (`AFFECTED`), no todos los del curso.

Lo que se retira y por qué: `You changed what it takes to complete this course` narraba la acción del propio admin (mismo defecto que el bloque del diff), era coloquial y no traducía. `Pick the groups where the new criteria should also apply to the people who already completed it:` tenía 17 palabras, tres subordinadas, un `it` colgando a dos líneas de su referente, y `criteria` como sinónimo mío de `conditions`.

## Edge cases a cubrir antes de entregar

- 15+ grupos afectados (el párrafo y el modal revientan; una tabla no).
- 0 grupos afectados (no debe aparecer nada).
- Un grupo donde nadie pierde el pase pero alguien lo gana (¿es aviso? probablemente no).
- Recalcular no deja rastro en v1 (RFC decisión 7) → el aviso en el grupo es la única huella.
- Cambio que *relaja* las reglas (nadie pierde, algunos ganan): el tono no puede ser de alarma.
- **Combo de 2-3 criterios en una misma persona** (Jon: *"¿y qué pasa si en missing es un combo de 3 cosas?"*): tienen que verse los tags, no un `+2`. Con el diálogo en `xl` caben; si no caben, la fila crece antes de colapsar.

## Registro

- 2026-08-03 · Escrito **después** de seis versiones rechazadas, a petición de Jon. Ninguna de las seis pasó por aquí; ese es el fallo de método, no las versiones.
- 2026-08-05 · Anchos de columna fijados tras medirlo en pantalla (no a ojo): con grupo 300 / contador 150, la columna de criterios se queda en **432px** y tres tags piden ~455px, así que Clara seguía en `+1` y la cabecera del contador se cortaba ("No longer compl…"). Se reparte grupo 230 / contador 170 → criterios ~482px. Wrap a dos líneas no es opción: `F0TagList` usa `OverflowList`, de una línea, y montar la lista a mano está prohibido.
- 2026-08-05 · Copy de la tabla (tags, dos cabeceras, el número). R12–R14 añadidas. Lo que **siguen cumpliendo** los cambios: R2 (ninguna frase nueva; el contexto lo dan cabecera y dato), R5 (el número no es metadata gris, es su propia columna con denominador), R7 (una idea por tag; nada de mezclar), R9 (el título del diálogo sigue llevando el dato), R10 (los nombres de grupo siguen en filas, no en prosa).
