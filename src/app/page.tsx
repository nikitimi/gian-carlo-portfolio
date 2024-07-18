'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Background, Header } from '~/components'
import { type SectionType, web, musician } from '~/lib/_index'
import { type DevIconType, processDevIconToUrl } from '../lib/devIcons'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
    Color,
    DirectionalLight,
    // DirectionalLightHelper,
    Mesh,
    Vector3,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import { randWithVariation } from '~/utils/random'
// import { useHelper } from '@react-three/drei'
import { useAppSelector } from '~/redux/hooks'
import { DIMENSION } from '~/utils/images'

const Main = () => {
    const STAR_QUANTITY = 1000
    const CAMERA_POSITION = new Vector3(1000, 1000, 1000)
    const ROTATION_SPEED = 0.1
    const RANDOM_POSITION = 1500
    const lightRef = useRef<DirectionalLight>(null!)
    const { darkmode } = useAppSelector((state) => state.ui)
    const sceneBackgroundColor = darkmode
        ? new Color(0x050505)
        : new Color(0xf2f2f2)

    const CustomOrbitControl = () => {
        const { camera, gl, scene } = useThree()
        const controls = new OrbitControls(camera, gl.domElement)
        // useHelper(lightRef, DirectionalLightHelper, 1, 'red')

        camera.position.x = CAMERA_POSITION.x
        camera.position.y = CAMERA_POSITION.y
        camera.position.z = CAMERA_POSITION.z
        camera.far = 20

        controls.enableDamping = true
        controls.enableZoom = false
        controls.enablePan = false
        controls.autoRotate = true
        controls.autoRotateSpeed = ROTATION_SPEED

        useFrame(({ camera, scene }) => {
            controls.update()
            scene.background = sceneBackgroundColor
            lightRef.current.position.set(
                camera.position.x,
                camera.position.y,
                camera.position.z
            )
        })

        return <></>
    }

    const Star = (props: JSX.IntrinsicElements['mesh']) => {
        const meshRef = useRef<Mesh>(null!)

        useFrame(() => {
            meshRef.current.rotation.x += ROTATION_SPEED * 0.05
            meshRef.current.rotation.y += ROTATION_SPEED * 0.05
        })

        return (
            <mesh {...props} ref={meshRef}>
                <sphereGeometry
                    args={[8.961, 8, 8, 0, 6.283185, 0, 3.141592]}
                />
                <meshStandardMaterial
                    color={darkmode ? new Color(0xf2f2f2) : new Color(0x120a3d)}
                />
            </mesh>
        )
    }

    return (
        <main>
            <div className="grid bg-white duration-300 ease-in-out dark:bg-black dark:text-white">
                <section className="h-screen">
                    <Canvas
                        scene={{
                            background: sceneBackgroundColor,
                        }}
                    >
                        <directionalLight
                            ref={lightRef}
                            castShadow
                            position={CAMERA_POSITION}
                            shadow-mapSize={[1024, 1024]}
                        >
                            <orthographicCamera
                                attach="shadow-camera"
                                position={CAMERA_POSITION}
                                args={[-10, 10, 10, -10]}
                            />
                        </directionalLight>
                        {/* <axesHelper args={[CAMERA_POSITION.z]} /> */}
                        <CustomOrbitControl />
                        {new Array<undefined>(STAR_QUANTITY)
                            .fill(undefined)
                            .map((noValue, index) => {
                                return (
                                    <Star
                                        key={index}
                                        position={
                                            new Vector3(
                                                randWithVariation(
                                                    RANDOM_POSITION * -1,
                                                    RANDOM_POSITION * 2,
                                                    RANDOM_POSITION
                                                ),
                                                randWithVariation(
                                                    RANDOM_POSITION * -1,
                                                    RANDOM_POSITION * 2,
                                                    RANDOM_POSITION
                                                ),
                                                randWithVariation(
                                                    RANDOM_POSITION * -1,
                                                    RANDOM_POSITION * 2,
                                                    RANDOM_POSITION
                                                )
                                            )
                                        }
                                    />
                                )
                            })}
                    </Canvas>

                    <div className="absolute top-0 isolate grid translate-y-1/2 grid-cols-2 bg-slate-300 py-20 duration-300 ease-in-out after:absolute after:inset-0 after:-z-20 after:-skew-y-6 after:bg-gradient-to-tr after:from-violet-syntexia after:to-violet-syntexia dark:bg-blue-syntexia dark:after:from-violet-syntexia dark:after:to-green-syntexia">
                        <div className="flex flex-col gap-6 self-end p-8">
                            <h1 className="w-max text-2xl font-bold text-slate-300 duration-300 ease-in-out dark:text-green-syntexia sm:text-3xl lg:text-5xl">
                                Full-Stack Developer
                            </h1>
                            <p className="text-sm text-slate-300 dark:text-white sm:text-base">
                                Hello there! My name is
                                <span className="text-sm font-semibold text-slate-300 duration-300 ease-in-out dark:text-green-syntexia sm:text-base">
                                    {` Gian Carlo Carranza, `}
                                </span>
                                A passionate Developer based in the Philippines.
                                📍
                            </p>
                        </div>
                        <div className="relative self-center justify-self-center overflow-hidden rounded-full border-4 border-black">
                            <Image
                                priority
                                draggable={false}
                                src="/"
                                // src="/avatar.jpg"
                                alt=""
                                width={DIMENSION * 2}
                                height={DIMENSION * 2}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

const Index = () => {
    const observer = useRef<IntersectionObserver | null>()
    const [num] = useState(1)

    const DynamicFooter = dynamic(() => import('~/components/Footer'), {
        loading: () => <p>Loading</p>,
    })

    useEffect(() => {
        let unsub = true
        function initializeObserver() {
            observer.current = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        const classList = [
                            'opacity-100',
                            'blur-none',
                            'translate-x-0',
                        ]
                        if (entry.isIntersecting)
                            return classList.forEach((className) =>
                                entry.target.classList.add(className)
                            )
                        classList.forEach((className) =>
                            entry.target.classList.remove(className)
                        )
                    })
                },
                {
                    root: document.querySelector('#scrollArea'),
                    rootMargin: '0px',
                    threshold: 0.4,
                }
            )
            const hiddenElements = document.querySelectorAll('section')
            hiddenElements.forEach((el) => observer.current?.observe(el))
        }
        if (unsub) {
            initializeObserver()
        }
        return () => {
            unsub = false
        }
    }, [num])

    return (
        <Background>
            <Header />
            <Main />
            <DynamicFooter />
        </Background>
    )
}

export default Index
