import React, { useState } from 'react';

const Imc = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const [bmiResult, setBmiResult] = useState(null);

    const [status, setStatus] = useState("");

    function calculateBMI() {
        let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
        setBmiResult(bmi);

        let bmiStatus = getStatus(bmi);

        setStatus(bmiStatus);

        setHeight("");
        setWeight("");
    }

    function getStatus(bmi) {
        if (bmi < 18.5) return "Bajo Peso";
        else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
        else if (bmi >= 25 && bmi < 29.9) return "Sobre Peso";
        else if (bmi >= 30 && bmi < 39.9) return "Obeso";
        else return "Obesidad Extrema";
    }
    return (
        <section className="container pb-5 imc">
            <div className="containaer-fluid rounded py-5 bg-white shadow">
                <div>
                    <h2 className="text-center fs-4">Calculadora IMC</h2>
                    <form>
                        <div className="d-flex align-items-center justify-content-center">
                            <input type="number" id="Height" value={height} onChange={(e) => setHeight(e.target.value)} required className="form-control mt-3 imc-input" placeholder="Altura en cm" />
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <input type="number" id="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} required className="form-control mt-3 imc-input" placeholder="Peso in kg" />
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <button className="btn btn-primary mt-4 btn-lg fs-6 imc-btn" onClick={calculateBMI}>Calcular IMC</button>
                        </div>
                        {bmiResult && (
                            <div className="text-center mt-4">
                                <p className="fs-5">Tu IMC es:  {bmiResult} </p>
                                <p className="fs-5">Actualmente estás: {status} </p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Imc;