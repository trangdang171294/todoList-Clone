export default function logger(reducer) {
  return (prevState, action, args) => {
    console.group(action);
    console.log('Prevstate', prevState);
    console.log('action arguments', args);
    const nextState = reducer(prevState, action, args);
    console.log('Nextstate', nextState);
    console.groupEnd();
    return nextState;
  };
}
