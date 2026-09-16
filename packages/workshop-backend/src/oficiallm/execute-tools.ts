/**
 * OficialLM fork hook — platform execute / sandbox tools registered for the Overseer agent.
 * Keep diffs small and listed in FORK.md so `merge upstream` stays tractable.
 *
 * Product identity stays on Better Auth in the host Worker; this module only extends
 * kernel tool surface when the host opts in via bindings.
 */
export const OFICIALLM_EXECUTE_TOOL_IDS = [
  'oficiallm.execute.sandbox',
] as const

export type OficallmExecuteToolId = (typeof OFICIALLM_EXECUTE_TOOL_IDS)[number]

/** Placeholder registration table — host Worker may bind concrete executors later. */
export function listOficiallmExecuteTools(): ReadonlyArray<{ id: OficallmExecuteToolId; title: string }> {
  return [
    {
      id: 'oficiallm.execute.sandbox',
      title: 'OficialLM sandbox execute',
    },
  ]
}
