import { useSelector, useDispatch } from 'react-redux';

function App() {
  const {
    fetching,
    dog,
    error
  } = useSelector((state)=> ({
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  }))

  const dispatch = useDispatch();

  function onRequestDog(params) {
    dispatch({ type: "API_CALL_REQUEST" })
  }

  return (
    <div className="App">

      <img src={dog} alt="dog" />

      {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
    </div>
  );
}

export default App;
