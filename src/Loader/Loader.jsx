import React from 'react'

export default function CardSkeleton({ length }) {
            const num = [... new Array(length)]

            return (
                        <>
                                    <div className="group relative overflow-hidden rounded-md shadow-lg">
                                                {/* Skeleton for Image */}
                                                <div className="h-0 pb-[75%] w-full bg-gray-300 animate-pulse" />

                                                <div className="absolute inset-0 bg-black/5 p-4  transition-all duration-300 group-hover:opacity-100">
                                                            <div className="flex h-full flex-col justify-between">
                                                                        {/* Skeleton for Title */}
                                                                        <div>
                                                                                    <div className="h-4 w-3/4 bg-gray-400 animate-pulse rounded-md mb-2"></div>
                                                                                    <div className="h-3 w-1/2 bg-gray-400 animate-pulse rounded-md"></div>
                                                                        </div>

                                                                        <div className="flex items-center justify-between mt-4">
                                                                                    {/* Skeleton for Price */}
                                                                                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                                                                                                <div className="h-4 w-4 bg-gray-400 animate-pulse rounded-md"></div>
                                                                                                <div className="h-4 w-12 bg-gray-400 animate-pulse rounded-md"></div>
                                                                                    </div>

                                                                                    {/* Skeleton for Buy Button */}
                                                                                    <div className="px-3 py-1 bg-gray-400 rounded-md w-14 h-8 animate-pulse"></div>
                                                                        </div>
                                                            </div>
                                                </div>
                                    </div>
                        </>
            );
}
