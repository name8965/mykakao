// kakao.js
// import { db } from "../../firebase";
// import {
//   addDoc,
//   collection,
//   deleteDoc,
//   doc,
//   getDoc,
//   getDocs,
//   updateDoc,
// } from "firebase/firestore";
// Actions
const LOAD = "widget/LOAD";
const CREATE = "widget/CREATE";
const REMOVE = "widget/REMOVE";
const UPDATE = "widget/UPDATE";
// const UPDATE = "my-app/widgets/UPDATE";
// const REMOVE = "my-app/widgets/REMOVE";

const initialState = {
  friendtalk: [{ talk: "test_friend_talk", date: "testdate" }],
  mytalk: [{ talk: "test_my_talk", date: "testdate", to: "name" }],
  isloaded: false,
  friendlist: [
    { name: "꽁" },
    { name: "갑" },
    { name: "프스" },
    // { text: "영화관 가기", completed: false },
    // { text: "매일 책읽기", completed: false },
    // { text: "수영배우기", completed: false },
    // { text: "코딩하기", completed: false },
  ],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "widget/LOAD": {
      return { list: action.widget_list, is_loaded: true };
    }
    case "widget/CREATE": {
      const new_widget_list = [...state.mytalk, action.widget];
      return { ...state, mytalk: new_widget_list };
    }
    case "widget/REMOVE": {
      const new_widget_list = state.list.filter((l, idx) => {
        console.log(
          parseInt(action.widget_index) !== idx,
          parseInt(action.widget_index),
          idx
        );
        return parseInt(action.widget_index) !== idx;
      });
      console.log(new_widget_list);
      return { ...state, list: new_widget_list };
    }
    case "widget/UPDATE": {
      const new_widget_list = state.list.map((l, idx) => {
        if (parseInt(action.widget_index) === idx) {
          return { ...l, completed: true };
        } else {
          return l;
        }
      });

      return { ...state, list: new_widget_list };
    }
    default:
      return state;
  }
}

// // Action Creators
export function createWidget(widget) {
  return { type: CREATE, widget };
}
export function removeWidget(widget) {
  return { type: REMOVE, widget };
}
export function updateWidget(widget) {
  return { type: UPDATE, widget };
}
export function loadwidget(widget) {
  return { type: LOAD, widget };
}

// export function createWidget(widget) {
//   return { type: CREATE, widget };
// }

// export function updateWidget(widget) {
//   return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
//   return { type: REMOVE, widget };
// }

//middlewares  미들웨어가 아직없음
// export const loadBucketFB = () => {
//   return async function (dispatch) {
//     const bucket_data = await getDocs(collection(db, "bucket"));

//     let bucket_list = [];

//     bucket_data.forEach((doc) => {
//       bucket_list.push({ id: doc.id, ...doc.data() });
//     });

//     dispatch(loadBucket(bucket_list));
//   };
// };

// export const addBucketFB = (bucket) => {
//   return async function (dispatch) {
//     const docRef = await addDoc(collection(db, "bucket"), bucket);
//     // const _bucket = await getDoc(docRef);//이미 bucket이 다 가지고있음
//     // const bucket_data = { id: _bucket.id, ..._bucket.data() };
//     const bucket_data = { id: docRef.id, ...bucket };

//     console.log(bucket_data);
//     console.log(docRef);

//     dispatch(createBucket(bucket_data));
//   };
// };

// export const updateBucketFB = (bucket_id) => {
//   return async function (dispatch, getState) {
//     console.log(bucket_id);
//     // 수정할 도큐먼트를 가져오고,
//     const docRef = doc(db, "bucket", bucket_id);
//     // 수정합시다!
//     await updateDoc(docRef, { completed: true });
//     // getState()를 사용해서 스토어의 데이터를 가져올 수 있어요.
//     console.log(getState().bucket);
//     // bucket list 데이터를 가져와요.
//     const _bucket_list = getState().bucket.list;
//     // findIndex로 몇 번째에 있는 지 찾기!
//     const bucket_index = _bucket_list.findIndex((b) => {
//       // updateBucketFB의 파라미터로 넘겨받은 아이디와
//       // 아이디가 독같은 요소는 몇 번째에 있는 지 찾아봐요!
//       return b.id === bucket_id;
//     });

//     dispatch(updateBucket(bucket_index));
//   };
// };

// export const deleteBucketFB = (bucket_id) => {
//   return async function (dispatch, getState) {
//     if (!bucket_id) {
//       window.alert("아이디가 없어요");
//       return;
//     }
//     const docRef = doc(db, "bucket", bucket_id);
//     await deleteDoc(docRef);

//     const _bucket_list = getState().bucket.list;
//     // findIndex로 몇 번째에 있는 지 찾기!
//     const bucket_index = _bucket_list.findIndex((b) => {
//       // updateBucketFB의 파라미터로 넘겨받은 아이디와
//       // 아이디가 독같은 요소는 몇 번째에 있는 지 찾아봐요!
//       return b.id === bucket_id;
//     });
//     dispatch(removeBucket(bucket_index));
//   };
// };

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//   return (dispatch) =>
//     get("/widget").then((widget) => dispatch(updateWidget(widget)));
// }
