import type { DropTargetRecord } from "@atlaskit/pragmatic-drag-and-drop/dist/types/internal-types"

import { extractClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"

import type { KanbanOnMoveParam } from "../types"

export function findTypeOfDropForLane(
  laneId: string | undefined,
  dropTargets: DropTargetRecord[]
):
  | {
      type: "sameLaneOverCard"
      laneTarget: DropTargetRecord
      cardTarget: { data: { index?: number } }
    }
  | {
      type: "sameLaneOverEmptySpace"
      laneTarget: DropTargetRecord
      cardTarget: undefined
    }
  | {
      type: "differentLaneOverCard"
      laneTarget: undefined
      cardTarget: { data: { index?: number } }
    }
  | {
      type: "differentLaneOverEmptySpace"
      laneTarget: undefined
      cardTarget: undefined
    } {
  const laneTarget = dropTargets.find(
    (t) =>
      (t.data as { type?: string; id?: string }).type === "list-droppable" &&
      (t.data as { type?: string; id?: string }).id === laneId
  )
  const cardTarget: { data: { index?: number } } | undefined = dropTargets.find(
    (t) => (t.data as { type?: string }).type === "list-card-target"
  ) as unknown as { data: { index?: number } } | undefined

  if (laneTarget) {
    if (cardTarget && cardTarget.data) {
      return { type: "sameLaneOverCard", laneTarget, cardTarget }
    }
    return { type: "sameLaneOverEmptySpace", laneTarget, cardTarget: undefined }
  }

  if (cardTarget && cardTarget.data) {
    return { type: "differentLaneOverCard", laneTarget: undefined, cardTarget }
  }
  return {
    type: "differentLaneOverEmptySpace",
    laneTarget: undefined,
    cardTarget: undefined,
  }
}

export function optimisticSameLaneOverCard<TRecord>(args: {
  resourceIndexOnLane: number
  cardTarget: { data: { index?: number } }
  sourceItem: TRecord
  fromLaneId: string
  toLaneId: string
  sourceId: string
  setItems: React.Dispatch<React.SetStateAction<TRecord[]>>
}): KanbanOnMoveParam {
  const {
    resourceIndexOnLane,
    cardTarget,
    sourceItem,
    fromLaneId,
    toLaneId,
    sourceId,
    setItems,
  } = args
  const indexOfTarget = Number(cardTarget.data.index)
  const closestEdge = extractClosestEdge(cardTarget.data)
  setItems((prev) => {
    const newItems = [...prev]
    newItems.splice(resourceIndexOnLane, 1)
    newItems.splice(
      indexOfTarget +
        (resourceIndexOnLane > indexOfTarget ? 0 : -1) +
        (closestEdge === "bottom" ? 1 : 0),
      0,
      sourceItem
    )
    return newItems
  })
  return {
    fromLaneId,
    toLaneId,
    sourceId,
    position: closestEdge === "bottom" ? "below" : "above",
    indexOfTarget,
  }
}

export function optimisticSameLaneOverEmpty<TRecord>(args: {
  resourceIndexOnLane: number
  sourceItem: TRecord
  fromLaneId: string
  toLaneId: string
  sourceId: string
  setItems: React.Dispatch<React.SetStateAction<TRecord[]>>
}): KanbanOnMoveParam {
  const {
    resourceIndexOnLane,
    sourceItem,
    fromLaneId,
    toLaneId,
    sourceId,
    setItems,
  } = args
  setItems((prev) => {
    const newItems = [...prev]
    newItems.splice(resourceIndexOnLane, 1)
    newItems.splice(0, 0, sourceItem)
    return newItems
  })
  return {
    fromLaneId,
    toLaneId,
    sourceId,
    indexOfTarget: null,
    position: null,
  }
}

export function optimisticDifferentLaneInsertOverCard<TRecord>(args: {
  cardTarget: { data: { index?: number } }
  sourceItem: TRecord
  fromLaneId: string
  toLaneId: string
  sourceId: string
  setItems: React.Dispatch<React.SetStateAction<TRecord[]>>
}): KanbanOnMoveParam {
  const { cardTarget, sourceItem, fromLaneId, toLaneId, sourceId, setItems } =
    args
  const indexOfTarget = Number(cardTarget.data.index)
  const closestEdge = extractClosestEdge(cardTarget.data)
  setItems((prev) => {
    const newItems = [...prev]
    newItems.splice(
      indexOfTarget + (closestEdge === "bottom" ? 1 : 0),
      0,
      sourceItem
    )
    return newItems
  })
  return {
    fromLaneId,
    toLaneId,
    sourceId,
    position: closestEdge === "bottom" ? "below" : "above",
    indexOfTarget,
  }
}

export function optimisticDifferentLaneInsertOverEmpty<TRecord>(args: {
  sourceItem: TRecord
  fromLaneId: string
  toLaneId: string
  sourceId: string
  setItems: React.Dispatch<React.SetStateAction<TRecord[]>>
}): KanbanOnMoveParam {
  const { sourceItem, fromLaneId, toLaneId, sourceId, setItems } = args
  setItems((prev) => {
    const newItems = [...prev]
    newItems.splice(0, 0, sourceItem)
    return newItems
  })
  return {
    fromLaneId,
    toLaneId,
    sourceId,
    indexOfTarget: null,
    position: null,
  }
}

export function optimisticDifferentLaneLeave<TRecord>(args: {
  resourceIndexOnLane: number
  setItems: React.Dispatch<React.SetStateAction<TRecord[]>>
}) {
  const { resourceIndexOnLane, setItems } = args
  setItems((prev) => {
    const newItems = [...prev]
    newItems.splice(resourceIndexOnLane, 1)
    return newItems
  })
}
