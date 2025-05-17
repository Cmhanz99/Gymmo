import React, { useState } from 'react'

export default function ExerciseCard({exercise, i}) {

    const [setsCompleted, setSetsComplete] = useState(0)

    function handleSetIncrement() {
        setSetsComplete((setsCompleted + 1) % 6)
    }

    return (
        <div className='p-5 rounded-lg flex flex-col gap-4 bg-gradient-to-br from-slate-900 to-black border border-slate-800 shadow-lg sm:flex-wrap relative overflow-hidden'>
            {/* Decorative Element */}
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-red-500 rounded-full opacity-30 blur-xl"></div>
            
            <div className='flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4'>
                <h4 className='text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-bold text-red-500'>
                    0{i + 1}
                </h4>
                <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center font-bold tracking-wide'>{exercise.name.replaceAll("_", " ")}</h2>
                <p className='text-sm text-slate-400 capitalize font-medium bg-black/30 px-3 py-1 rounded-full'>{exercise.type}</p>
            </div>
            
            <div className='flex flex-col'>
                <h3 className='text-red-500 text-sm font-bold'>TARGET MUSCLES</h3>
                <p className='capitalize font-medium'>{exercise.muscles.join(' & ')}</p>
            </div>

            <div className='flex flex-col bg-black/30 rounded-lg gap-2 p-3 border border-slate-800'>
                {exercise.description.split('___').map((val, index) => {
                    return (
                        <div key={index} className='text-sm'>
                            {val}
                        </div>
                    )
                })}
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-3'>
                {['reps', 'rest', 'tempo'].map(info => {
                    return (
                        <div key={info} className='flex flex-col p-3 rounded-lg bg-black/30 border border-slate-800 w-full'>
                            <h3 className='capitalize text-blue-500 text-sm font-bold'>{info === 'reps' ? `${exercise.unit}` : info}</h3>
                            <p className='font-bold'>{exercise[info]}</p>
                        </div>
                    )
                })}
                <button 
                    onClick={handleSetIncrement} 
                    className='flex flex-col p-3 rounded-lg bg-gradient-to-r from-red-900/30 to-blue-900/30 border border-slate-800 hover:border-blue-500 w-full duration-200 hover:shadow-lg hover:shadow-blue-500/20'
                >
                    <h3 className='text-blue-500 text-sm font-bold uppercase'>Sets completed</h3>
                    <div className='font-bold flex items-center gap-1 mt-1'>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, idx) => (
                                <div 
                                    key={idx} 
                                    className={`w-2 h-2 rounded-full ${idx < setsCompleted ? 'bg-red-500' : 'bg-slate-700'}`}
                                ></div>
                            ))}
                        </div>
                        <p className="ml-2">{setsCompleted} / 5</p>
                    </div>
                </button>
            </div>
        </div>
    )
}