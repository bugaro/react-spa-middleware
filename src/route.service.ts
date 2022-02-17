import { AppRoutes } from './@types/routes.type';

class RouteService {
  /**
   * @description Define nested states in route name
   * @param toState 'app.home.users'
   * @param fromState 'app'
   * @returns ['app.home','app.home.users']
   */
  resolveState(toState: string | null | undefined, fromState: string | null | undefined): string[] {
    if (typeof toState !== 'string') return [];
    const to = toState.split('.');
    /**
     * If fromState not a string return state from top segment
     */
    if (typeof fromState !== 'string') {
      return this.resolveAllState(to);
    }

    /**
     * If top segments different return state from top segment
     */
    const topSegment = 0;
    const from = fromState.split('.');
    if (to[topSegment] !== from[topSegment]) return this.resolveAllState(to);
    /**
     * Define state from child outlet
     */
    const nameLength = Math.max(to.length, from.length);
    for (let i = topSegment + 1; i < nameLength; i++) {
      if (to[i] === undefined) {
        return [];
      }
      if (to[i] !== from[i]) {
        const currState = to.slice(0, i).join('.');
        const nextState = to.slice(i, to.length);
        return this.resolveFromState(currState, nextState);
      }
    }
    return [];
  }
  /**
   * @description Get routes by route name
   * @param routeNames ['app', 'app.home']
   * @param routes [{name: 'app', ...}, ...]
   * @returns [{name: 'app', ...}, {name: 'app.home', ...}]
   */
  getResolvedRoutes(routeNames: string[], routes: AppRoutes): AppRoutes {
    return routes.filter((route) => routeNames.includes(route.name));
  }
  private resolveAllState(state: string[]): string[] {
    /**
     * Build states for nested view
     */
    const routeStates = [];
    for (let i = 0, len = state.length; i < len; i++) {
      if (i < 1) {
        routeStates.push(state[i]);
        continue;
      }
      routeStates.push(`${routeStates[i - 1]}.${state[i]}`);
    }
    return routeStates;
  }
  private resolveFromState(curr: string, next: string[]): string[] {
    const states = [];

    for (let i = 0, len = next.length; i < len; i++) {
      if (i < 1) {
        states.push(`${curr}.${next[i]}`);
        continue;
      }
      states.push(`${states[i - 1]}.${next[i]}`);
    }
    return states;
  }
}
export const routeService = new RouteService();
