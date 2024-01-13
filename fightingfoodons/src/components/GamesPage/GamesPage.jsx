import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './GamesPage.css';
import BoxArt from '../../../public/db/games/gbcboxart.jpg';
import FightingFoodonsGBCRom from '../../../public/db/games/KakutouRyouriDensetsuBistroRecipe-GekitouFoodonBattleHen.gbc'
import { WasmBoy } from 'wasmboy';
import { ResponsiveGamepad } from 'responsive-gamepad';

export const GamesPage = () => {

    const wasmBoyCanvasRef = useRef();

    ResponsiveGamepad.enable();
    ResponsiveGamepad.getState();

    const setupWasmBoy = async () => {
        const WasmBoyOptions = {}
        await WasmBoy.config(WasmBoyOptions, wasmBoyCanvasRef.current);
        await WasmBoy.loadROM(FightingFoodonsGBCRom);
        await WasmBoy.play();
        
    }

    return (
        <div>
            <Container>
                <h2>Play the games!</h2>
                <div className="text-center">
                    <img src={BoxArt} className="boxArtImg" alt="Fighting Foodons Gameboy Color Box Art" />
                </div>

                {/* WASMBOY */}
                <div className="wasmBoyContainer">
                    <Button onClick={setupWasmBoy} className="wasmBoyPlayButton">Play</Button>
                    <br />
                    <canvas ref={wasmBoyCanvasRef} className="wasmBoyCanvas"></canvas>
                    <p>Note: Currently only works with a keyboard. However, I am working on adding mobile controls soon.
                        <br />
                        There is also a bug I am working on fixing where the game stops working if you switch to another tab/window.
                    </p>
                    <p>Controls: A button = X, B button = Z, Start button = Enter/Return, Select button = Tab</p>
                </div>
            </Container>
        </div>
    )
}