export function MobileMockup() {
  return (
    <div className='mockup-phone'>
      <div className='camera'></div>
      <div className='display'>
        <div className='artboard artboard-demo bg-white phone-1 flex flex-col'>
          <div className='flex-1 mt-8 w-full px-8'>
            {[1, 2, 3, 4, 5].map((n) => {
              return (
                <div className='py-4 flex justify-between' key={n}>
                  <div>
                    <div>Task {n}</div>
                    <div>yyyy mm dd</div>
                  </div>
                  <div className='p-2'>
                    <span className='i-lucide-edit w-5 h-5' />
                  </div>
                </div>
              )
            })}
          </div>
          <div className='flex w-full justify-between px-8 py-4'>
            <button>
              <span className='i-lucide-home w-5 h-5' />
            </button>
            <button>
              <span className='i-lucide-table-properties w-5 h-5' />
            </button>
            <button>
              <span className='i-lucide-clipboard-check w-5 h-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
