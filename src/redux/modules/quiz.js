// quiz.js

// 초기값 설정
const initialState = {
  quizBtae: {
    name: "btae",
    QA: ["나는 1번", "나는 2번", "나는 3번", "나는 4번", "나는 5번"],
    answer: ["O", "O", "X", "O", "X"],
  },
  comment : ["재미있어요7","재미있어요6","재미있어요5","재미있어요4","재미있어요3","재미있어요2","재미있어요1"],
  myAnswer: [],
  quizTom: {
    name: "btae",
    QA: ["나는 1번", "나는 2번", "나는 3번", "나는 4번", "나는 5번"],
    answer: ["O", "O", "X", "O", "X"],
  },
  rank : [{name : 'btae6', score : 10},{name : 'btae4', score : 40},{name : 'bta3e1', score : 80 },{name : 'bta2e2', score : 60},{name : 'btae5', score : 20},{name : 'bta1e3', score : 46}]
};

// Actions
const LOAD = "quiz/LOAD";
const CREATE = 'quiz/CREATE';
const UPDATE = "quiz/UPDATE";
const REMOVE = 'quiz/REMOVE';
const DELETE = 'name/DETELE';
const UPDATE_score = 'score/UPDATE'

// Action Creators // 액션 함수
export function loadQuiz() {
  return { type: LOAD };
}
//이게 맞나? LOAD
// export function loadQuiz(quiz) {
//   return { type: LOAD, quiz };
// }
export function updateScore(score){
  return {type : UPDATE_score, score}
}

export function deleteName(name){
  return {type: DELETE, name}
}

export function creatQuiz(quiz) {
  return { type: CREATE, quiz };
}

export function updateQuiz(quiz) {
  return { type: UPDATE, quiz };
}

export function removQuiz(quiz) {
  return { type: REMOVE, quiz };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getQuiz () {
//   return dispatch => get('/quiz').then(quiz => dispatch(updaetQuiz(quiz)))
// }

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case UPDATE:
      const newAnswer = [...state.myAnswer, ...action.quiz];
      return { ...state, myAnswer: newAnswer };
    case CREATE :
      const newComment = [...state.comment, action.quiz];
      return {...state, comment: newComment}
    case REMOVE:
      const removeComment = state.comment.filter((v,l)=>{
        if(l !== action.quiz) return v;
      })
      return {...state, comment:removeComment}
    case DELETE:
      const deleteData = action.name;
      console.log(deleteData)
      const stats = {...state};
      delete stats[deleteData];
      console.log(stats)
      
      return {...stats}
    default:
      return state;
  }
}
