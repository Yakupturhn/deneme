import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

import { setDarkMode } from "./stores/site";
import { routes } from "./routes";
import reducer from "./reducers/reducer";
import Headerr from "./Headerr";
import AddTodo from "./AddTodo";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState, useCallback, useMemo } from "react";
import { useReducer } from "react";
import Todos from "./Todos";

import SiteProvider from "./context/SiteContext";
import AuthProvider from "./context/AuthContext";
import Home from "./Home";

function App() {
  const { dark } = useSelector((state) => state.site);
  // const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [count, setCount] = useState(0);

  console.log("APP rendered");

  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: "",
    search: "",
  });

  const searchHandle = (e) => {
    dispatch({
      type: "SET_SEARCH",
      value: e.target.value,
    });
  };

  const filteredTodos = useMemo(() => {
    return state.todos.filter((todo) =>
      todo
        .toLocaleLowerCase("TR")
        .includes(state.search.toLocaleLowerCase("TR"))
    );
  }, [state.todos, state.search]);

  const submitHandle = useCallback(
    (e) => {
      e.preventDefault();

      dispatch({
        type: "ADD_TODO",
        todo: state.todo,
      });

      //setTodos((prevTodos) => [...prevTodos, todo]);
      //setTodo("");
    },
    [state.todo]
  );

  const onChange = useCallback((e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  }, []);

  return (
    <>
      <SiteProvider>
        <AuthProvider>
          <Router>
            <div className={dark ? "darkMode" : ""}>
              <button onClick={() => dispatch(setDarkMode())}>DARK MODE</button>
              <Header />
              {/* <Counter></Counter>
        <CounterAction /> */}
              <Switch>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    exact={route.exact}
                    path={route.path}
                    render={() => {
                      if (route.protectedPage && !user) {
                        return <Redirect to="/login" />;
                      }

                      return <route.component />;
                    }}
                  />
                ))}
              </Switch>
              <Footer />
            </div>
          </Router>

          <Headerr />

          <h1>Todo App</h1>
          <h3>{count}</h3>
          <button onClick={() => setCount((count) => count + 1)}>Arttır</button>
          <hr />

          <input
            type="text"
            value={state.search}
            placeholder="Todolarda ara"
            onChange={searchHandle}
          ></input>

          <AddTodo
            onChange={onChange}
            submitHandle={submitHandle}
            state={state}
          />

          <Todos todos={filteredTodos} />

          <hr />

          <Home />
        </AuthProvider>
      </SiteProvider>
    </>
  );
}

export default App;
