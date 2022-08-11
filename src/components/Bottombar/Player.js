import React, { useMemo } from "react";
import { Icon } from "../../Icons";
import { useAudio } from "react-use";
import { secondsToTime } from "../../utilis";
import CustomRange from "../CustomRange";
import { useDispatch, useSelector } from "react-redux";
import { setControls, setPlaying, setSidebar } from "../../stores/player";
import { useEffect } from "react";

export default function Player() {
  const dispatch = useDispatch();
  const { current, sidebar } = useSelector((state) => state.player);

  //html,  ses.state, method, ref
  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
    autoPlay: true,
  });
  useEffect(() => {
    dispatch(setControls(controls));
  }, []);
  useEffect(() => {
    controls.play();
  }, [current]);
  useEffect(() => {
    dispatch(setPlaying(state.playing));
  }, [state.playing]);

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return "MuteVolumeIcon";
    if (state.volume > 0 && state.volume < 0.33) return "VolumeLowIcon";
    if (state.volume > 0.33 && state.volume < 0.66) return "VolumeNormalIcon";
    return "volumeIcon";
  }, [state.volume, state.muted]);
  return (
    <div className="flex px-4 justify-between items-center h-full">
      <div className="min-w-[11.25rem] w-[30%] flex items-center">
        {current.title && (
          <div className="flex items-center">
            <div className="flex items-center">
              {!sidebar && (
                <div className="w-14 group relative h-14 mr-3 flex-shrink-0">
                  <img src={current.image} alt="" />
                  <button
                    onClick={() => {
                      dispatch(setSidebar(true));
                      console.log("sidebar is : ", sidebar);
                    }}
                    className="w-6 h-6 bg-black rounded-full flex justify-center items-center hover:!opacity-100 group-hover:opacity-80 hover:scale-[1.06] absolute top-1 right-1 opacity-0"
                  >
                    <Icon size={16} name="arrowLeft"></Icon>
                  </button>
                </div>
              )}
              <div>
                <h6 className="text-sm">{current.title}</h6>
                <p className="text-[0.68rem] text-white text-opacity-70">
                  {current.artist}
                </p>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-80">
              <Icon size={16} name="heartIcon"></Icon>
            </button>
          </div>
        )}
      </div>
      <div className="max-w-[45.125rem] w-[40%] pt-2 flex flex-col px-4 items-center">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="MixPlay"></Icon>
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="PreviousPlay"></Icon>
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 bg-white text-black rounded-full hover:scale-[1.06]"
          >
            <Icon
              size={16}
              name={state?.playing ? "pauseIcon" : "ContinueIcon"}
            ></Icon>
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="NextPlay"></Icon>
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="RepeatingIcon"></Icon>
          </button>
        </div>
        <div className="w-full flex items-center gap-x-2">
          {audio}
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          ></CustomRange>
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex justify-end items-center">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="microfonIcon"></Icon>
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="addQueryIcon"></Icon>
        </button>
        <button
          onClick={controls[state.muted ? "unmute" : "mute"]}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
        >
          <Icon size={16} name={volumeIcon}></Icon>
        </button>
        <div className="w-[5.813rem] max-w-full">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state.muted ? 0 : state?.volume}
            onChange={(value) => {
              controls.unmute();
              controls.volume(value);
            }}
          ></CustomRange>
        </div>
      </div>
    </div>
  );
}
