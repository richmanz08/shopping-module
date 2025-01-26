import React from 'react'

interface AdverTisePaperProps {}

export const AdverTisePaper: React.FC<AdverTisePaperProps> = () => {
  return (
    <div className="grid !grid-cols-4 w-full gap-4">
      <div className="col-span-2 h-[400px] overflow-hidden rounded-lg bg-[url(https://i.pinimg.com/736x/d3/6a/64/d36a64a29f151efe896b485631ffd199.jpg)] bg-no-repeat bg-cover bg-120px">
        <div className="w-full h-full p-4 bg-gradient-to-r from-outline-grey via-[rgba(0,0,0,0)] to-[rgba(0,0,0,0)]">
          <div className="font-playwrite text-h3 text-primary-default">
            Season Sale
          </div>
          <div className="text-h1 text-secondary-default">Every 300 Baht</div>
          <div className="text-b5 text-secondary-default">
            Get a discount 20 THB
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 border h-[192px] overflow-hidden rounded-lg flex relative bg-[url(https://i.pinimg.com/736x/19/89/f2/1989f25a6e69320fe8dadcbc20616431.jpg)]">
            <div className="w-full h-full p-4">
              <div className="flex flex-col">
                <div className="bg-primary-default px-1 text-t7 text-gray-50 w-fit">
                  3% OFF
                </div>
                <div className="text-t4 text-white">Clothing</div>
              </div>
              <div className="text-h2 text-white mt-20">T-Shirt, Pant</div>
            </div>
          </div>
          <div className="col-span-2 border h-[192px] overflow-hidden rounded-lg relative flex bg-[url(https://i.pinimg.com/736x/a0/5b/c3/a05bc3ad90aab2d1b965fdec3c884392.jpg)] bg-cover bg-center">
            <div className="w-full h-full p-4">
              <div className="flex flex-col">
                <div className="bg-primary-default px-1 text-t7 text-gray-50 w-fit">
                  3% OFF
                </div>
                <div className="text-t4 text-white">Accessories</div>
              </div>
              <div className="text-h2 text-white mt-20">Watch</div>
            </div>
          </div>
          <div className="col-span-4 overflow-hidden h-[192px] rounded-lg relative flex bg-[url(https://i.pinimg.com/736x/2b/9b/27/2b9b274d5df2297fde146c404c2b0839.jpg)] bg-cover bg-center">
            <div className="absolute w-full h-full p-4">
              <div className="text-t4 text-secondary-700 ">Electronics</div>{' '}
              <div className="text-h2 text-secondary-default mt-4 opacity-65">
                Phone, Tablet
              </div>
              <div className="text-b6 text-secondary-default">
                Discount 3% Off
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
