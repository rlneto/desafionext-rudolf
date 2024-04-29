export default function Vaga(props: { titulo: string, area1: string, area2: string}) {
  return(
    <div className="group text-[#DFDFE4] border-[#DFDFE4] border-solid border-2 p-[25px] w-full h-full md:w-[400px] md:h-[127px] flex flex-col gap-3 hover:border-[#FA8400] group-hover:text-[#FA8400]">
        <div className="flex flex-row font-bold text-2xl text-[#DFDFE4] group-hover:text-[#FA8400]">{props.titulo}</div>
        <div className="flex gap-[15px] text-[16px]">
          <div className="border-solid border-[1px] border-[#DFDFE4] rounded-[5px] px-[13px] py-[6px] text-[#DFDFE4] group-hover:border-[#FA8400] group-hover:text-[#FA8400]">{props.area1}</div>
          <div className="border-solid border-[1px] border-[#DFDFE4] rounded-[5px] px-[13px] py-[6px] text-[#DFDFE4] group-hover:border-[#FA8400] group-hover:text-[#FA8400]">{props.area2}</div>
      </div>
    </div>
  )
}
