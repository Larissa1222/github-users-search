const GET_GITHUB_USER_LOADING = '@github/GET_GITHUB_USER_LOADING';
const GET_GITHUB_USER_SUCESS = '@github/GET_GITHUB_USER_SUCESS';
const GET_GITHUB_USER_FAIL = '@github/GET_GITHUB_USER_FAIL';

interface IGithubInitialState {
  loading: boolean;
  error: boolean;
  errorMessage: string;

  users: any;
  gituser: string;
}

const GITHUB_INITIAL_STATE: IGithubInitialState  = {
  loading: false,
  error: false,
  errorMessage: null,

  users:[],
  gituser: " ",
};

//REDUCER
export default function githubReducer(state = GITHUB_INITIAL_STATE, action: any): IGithubInitialState{

  switch(action.type){

    case GET_GITHUB_USER_LOADING:
      return{
        ...GITHUB_INITIAL_STATE,  
        loading: true, 
      };

    case GET_GITHUB_USER_SUCESS:
      return{
        ...GITHUB_INITIAL_STATE,
        users: action.payload.users,
        gituser: action.payload.gituser,

        errorMessage: action.payload.errorMessage,
      };

    case GET_GITHUB_USER_FAIL:
      return{
        ...GITHUB_INITIAL_STATE,
        error: true,
        errorMessage: action.errorMessage,
      };

    default:
      return state;
  }
};

//ACTION
export function getGithubUser(query: string){
  return async (dispatch) => {
    dispatch(getGithubUserLoading());

    try {
      const url = `https://api.github.com/search/users?q=${query}`;

      const response = await fetch(url);
      const json = await response.json();

      const users = json.items;
  
      dispatch(getGithubUserSucess(users));
      
    } catch (e) {
        console.error(e);
        dispatch(getGithubUserFail());
    }
  }
}  

function getGithubUserLoading(){
  return{
    type: GET_GITHUB_USER_LOADING,
  }
}
function getGithubUserSucess(users){
  return{
    type: GET_GITHUB_USER_SUCESS, 
    payload: {
      users,
      gituser: '',
    }
  }
}
function getGithubUserFail(){
  return{
    type: GET_GITHUB_USER_FAIL,
    errorMessage: 'Something is wrong, try again later',
  }
}