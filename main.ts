namespace servoControl {

    /**
     * Set servo angle on selected pin
     * @param pin micro:bit pin where servo is connected
     * @param angle angle from 0 to 180 degrees
     */
    //% block="set servo on pin %pin|to angle %angle"
    //% angle.min=0 angle.max=180
    //% weight=100
    export function setServoAngle(pin: AnalogPin, angle: number): void {
        pins.servoWritePin(pin, angle)
    }
}
