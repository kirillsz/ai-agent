const Footer = () => {
  return (
    <div className="flex items-center w-full gap-2 justify-center">
      <button
        className="  flex items-center justify-center hover:scale-95 transition-transform p-0.5  bg-white rounded  box-border relative "
        type="button"
      >
        <div className="bg-[#009a22] p-2 w-full text-white font-bold text-xs/8">
          Chat Bubble
        </div>
      </button>
      <button
        className="  flex items-center justify-center hover:scale-95 transition-transform p-0.5  bg-white rounded  box-border relative "
        type="button"
      >
        <div className="bg-[#009a22] p-2 w-full text-white font-bold text-xs/8">
          Copy CA
        </div>
      </button>
      <dialog id="my_modal_1" className="modal bg-white/30 backdrop-blur-sm">
        <div className="modal-box bg-info-content">
          <div className="flex flex-col items-center w-full h-full">
            <div className="w-full overflow-y-auto  h-72 max-h-72 py-4 bg-base-content/5 border-2 border-success/15 backdrop-blur rounded mt-8 mb-2 p-4 flex flex-col gap-4 ">
              <div className="chat chat-end h-96">
                <div className="chat-bubble w-full max-w-xs whitespace-pre-wrap backdrop-blur-sm text-black bg-base-content/70 !text-sm !text-left font-mono">
                  <span>I am trinity, and that is enough...</span>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[600px] bg-base-content/5 items-center justify-between border-2 border-success/15 rounded backdrop-blur-sm mb-8 px-4 py-2 flex gap-2">
              <textarea
                className="textarea w-full h-20 textarea-bordered resize-none bg-base-content/5 backdrop-blur text-[16px]"
                placeholder="Join the matrix..."
              ></textarea>
              <button type="button" className="w-fit p-4 text-[#009a22]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-send"
                >
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                  <path d="m21.854 2.147-10.94 10.939"></path>
                </svg>
              </button>
            </div>
          </div>
          <form method="dialog">
            <button
              type="submit"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
        </div>
      </dialog>

      <dialog id="my_modal_2" className="modal bg-white/10 backdrop-blur-sm">
        <div className="modal-box lg:w-full lg:max-w-[650px] bg-info-content">
          <div className="flex flex-col items-center ">
            <div className="flex flex-col gap-2 max-lg:px-0 px-4">
              <div className="flex flex-col ">
                <span className="py-2 pb-4 text-xl/8 font-bold text-white">
                  Select Theme
                </span>
                <div className="grid grid-cols-2 *:uppercase lg:grid-cols-4 gap-2 text-xs/8 ">
                  <button
                    className="  flex items-center justify-center hover:scale-95 transition-transform p-0.5  bg-white rounded  box-border relative "
                    type="button"
                  >
                    <div className="bg-[#009a22] p-2 w-full text-white font-bold text-xs">
                      Default
                    </div>
                  </button>
                  <button
                    className="  flex items-center justify-center hover:scale-95 transition-transform p-0.5  bg-white rounded  box-border relative "
                    type="button"
                  >
                    <div className="bg-[#009a22] p-2 w-full text-white font-bold text-xs">
                      Trinity
                    </div>
                  </button>
                  <button
                    className="  flex items-center justify-center hover:scale-95 transition-transform p-0.5  bg-white rounded  box-border relative "
                    type="button"
                  >
                    <div className="bg-[#009a22] p-2 w-full text-white font-bold text-xs">
                      3D
                    </div>
                  </button>
                  <button
                    className="  flex items-center justify-center hover:scale-95 transition-transform p-0.5  bg-white rounded  box-border relative "
                    type="button"
                  >
                    <div className="bg-[#009a22] p-2 w-full text-white font-bold text-xs">
                      Resurrections
                    </div>
                  </button>
                  <button
                    className="  flex items-center justify-center hover:scale-95 transition-transform p-0.5  bg-white rounded  box-border relative "
                    type="button"
                  >
                    <div className="bg-[#009a22] p-2 w-full text-white font-bold text-xs">
                      Megacity
                    </div>
                  </button>
                  <button
                    className="  flex items-center justify-center hover:scale-95 transition-transform p-0.5  bg-white rounded  box-border relative "
                    type="button"
                  >
                    <div className="bg-[#009a22] p-2 w-full text-white font-bold text-xs">
                      Operator
                    </div>
                  </button>
                  <button
                    className="  flex items-center justify-center hover:scale-95 transition-transform p-0.5  bg-white rounded  box-border relative "
                    type="button"
                  >
                    <div className="bg-[#009a22] p-2 w-full text-white font-bold text-xs">
                      Morpheus
                    </div>
                  </button>
                  <button
                    className="  flex items-center justify-center hover:scale-95 transition-transform p-0.5  bg-white rounded  box-border relative "
                    type="button"
                  >
                    <div className="bg-[#009a22] p-2 w-full text-white font-bold text-xs">
                      Bugs
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <form method="dialog">
            <button
              type="submit"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Footer;
