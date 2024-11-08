const Cards = () => {
  return (
    <>
        <div className="bg-[#f1f1f1] w-full h-auto">
            <div className="cards-container px-20 flex items-center justify-center gap-5">
                <div className="cards bg-[#004d43] rounded-xl flex items-center justify-center w-1/2 h-[400px] relative">
                  <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                  <p className="text-[#cdea68] px-3 py-1 rounded-full border-[1px] border-[#cdea68] absolute left-[30px] bottom-[30px]">&copy; 2019-2022</p>
                </div>
                <div className="cards bg-[#212121] rounded-xl flex items-center justify-center w-1/4 h-[400px] relative">
                  <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                  <p className="text-[#f4f4f4] px-3 py-1 rounded-full border-[1px] border-[#f4f4f4] absolute left-[30px] bottom-[30px]">&copy; 2019-2022</p>
                </div>
                <div className="cards bg-[#212121] rounded-xl flex items-center justify-center w-1/4 h-[400px] relative">
                  <img className="h-[100px] w-[100px]" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                  <p className="text-[#f4f4f4] px-3 py-1 rounded-full border-[1px] border-[#f4f4f4] absolute left-[30px] bottom-[30px]">&copy; 2019-2022</p>
                </div>
            </div>
            </div> 
    </>
  )
}

export default Cards
