interface IApiSourceParams {
  GetList: IGetList;
}
interface IGetList {
  id: Number;
}

function fetchApi<T extends keyof IApiSourceParams>(
  url: T,
  parms: IApiSourceParams[T]
) {
  return {
    url,
    method: "post",
    body: parms
  };
}
fetchApi("GetList", { id: 2 });
// fetchApi("GetList", { id: "33" }); // 报错, id 应该是 number 类型
