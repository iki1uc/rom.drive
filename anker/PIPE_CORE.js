// PIPE_CORE.js

export function PIPE_CORE(state){

  console.log("PIPE:", state);

  if(window.updatePulse){
    updatePulse(state.pulse);
  }

  if(window.updateAxis){
    updateAxis(state.axis);
  }

  if(window.updateOrbit){
    updateOrbit(state.orbit);
  }
}
