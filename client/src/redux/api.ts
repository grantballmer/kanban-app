// import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BoardsType } from "../types/redux";

// export const api = createApi({
//   baseQuery: fakeBaseQuery(),
//   endpoints: (build) => ({
//     getBoards: build.query<BoardsType[], void>({
//       // async queryFn() {
//       //   console.log("something");
//         // let localDrivers = localStorage.getItem(
//         //   REDUX.LOCAL_STORAGE_KEYS.DRIVERS
//         // );

//         // if (localDrivers) {
//         //   const jsonDrivers = JSON.parse(localDrivers) as DriverType[];
//         //   return { data: jsonDrivers };
//         // } else {
//         //   try {
//         //     const driversDoc = await getDoc(
//         //       doc(
//         //         db,
//         //         FIREBASE.COLLECTION.DRIVERS,
//         //         FIREBASE.DOCUMENT.DRIVERS_DOC
//         //       )
//         //     );

//         //     const driversData = driversDoc.data() as { drivers: DriverType[] };
//         //     return { data: driversData.drivers };
//         //   } catch (err) {
//         //     return { data: [] };
//         //   }
//         // }
//       // },
//     }),
//   }),
// });

// export const { useGetBoardsQuery } = api;

export {};
