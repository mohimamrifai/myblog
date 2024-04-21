export default function responseJson(
  res: any,
  status: number,
  message: string,
  data?: any
) {
  return res
    .json({
      status,
      message,
      data: data,
    })
    .status(200);
}
