import { FC, useCallback, useEffect, useRef } from "react";
import { IAudioModuleProps } from "@features/waves/components/molecules/AudioModule/AudioModuleInterfaces";

const debounce = (callback, delay) => {
	let t;
	console.log("debounce creator");
	return () => {
		clearTimeout(t);
		t = setTimeout(() => callback(), delay);
	};
};

export const AudioModule: FC<IAudioModuleProps> = (props) => {
	// const dispatch = useAppDispatch();
	// const
	const { waves } = props;
	const mainAudioCtxRef = useRef<AudioContext>();

	const isMainAudioContextLoaded = () => {
		return !!mainAudioCtxRef.current;
	};

	const loadMainAudioContext = () => {
		console.log("loadMainAudioContext");
		// if (mainAudioCtxRef.current) {
		// 	mainAudioCtxRef.current.suspend();
		// 	mainAudioCtxRef.current = null;
		// }
		//
		// const audioContext = new AudioContext();
		// const mainGainNode = new GainNode(audioContext, {
		// 	gain: 0.1,
		// });
		// const finish = audioContext.destination;
		//
		// for (const wave of waves) {
		// 	const oscilatorNode = new OscillatorNode(audioContext, {
		// 		frequency: wave.frequency,
		// 	});
		// 	const gainNode = new GainNode(audioContext, {
		// 		gain: wave.amplitude,
		// 	});
		//
		// 	// TODO: phase
		//
		// 	oscilatorNode.start();
		// 	oscilatorNode.connect(gainNode);
		// 	gainNode.connect(mainGainNode);
		// }
		//
		// mainGainNode.connect(finish);
		// mainAudioCtxRef.current = audioContext;
	};

	const debouncedLoadMainContext = useCallback(
		() => debounce(loadMainAudioContext, 2000),
		[],
	);

	useEffect(() => {
		console.log("in useEffect");
		debouncedLoadMainContext();
	}, [waves]);

	// const mainAudioCtx = mainAudioCtxRef.current;

	const handleMouseUp = () => {
		console.log("mouseUp");
		mainAudioCtxRef.current.suspend();
	};

	const handleMouseDown = () => {
		console.log("mouseDown");
		if (!isMainAudioContextLoaded()) {
			loadMainAudioContext();
		}

		mainAudioCtxRef.current.resume();
	};

	return (
		<>
			<button
			// onKeyUp={(e) => {
			// 	console.log(e);
			// }}
			>
				PLAY
			</button>
		</>
	);
};
