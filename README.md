ReduxReact - Refactor code to use redux.
Redux is a way of managing and updating application wide states through events called actions.
 State - need intial state form startup
 Action - what actually happens
 Reducer - receives two arguments state and action
 removed GlobalState ifle and replaced all its calls and such with import { useDispatch, useSelector } from 'react-redux';  in every page where it existed.
 heroku URL:https://stormy-lake-18207.herokuapp.com/
 github url: https://github.com/ptantsidis/reduxReact.gitgit 