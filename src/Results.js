import React from 'react';
import './Results.css';


function Results({uvIndex}) {
    let index = uvIndex;
    let risk;

    if (index < 3) {risk = "low"}
    else if (index < 6) {risk = "moderate"}
    else if (index < 8) { risk = "high";}
    else if (index < 11) { risk = "very high";}
    else {risk = "extreme";}


    let uvRec={
        'low': '"wear sunglasses on bright days. If you burn easily, cover up and use broad spectrum SPF 30+ sunscreen. Bright surfaces, such as sand, water, and snow, will increase UV exposure."',
        'moderate': '"stay in shade near midday when the Sun is strongest. If outdoors, wear Sun protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure."',
        'high': '"reduce time in the Sun between 10 a.m. and 4 p.m. If outdoors, seek shade and wear Sun protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure."',
        'very high': '"take extra precautions because unprotected skin and eyes will be damaged and can burn quickly. Minimize Sun exposure between 10 a.m. and 4 p.m. If outdoors, seek shade and wear Sun protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure."',
        'extreme':'"take all precautions because unprotected skin and eyes can burn in minutes. Try to avoid Sun exposure between 10 a.m. and 4 p.m. If outdoors, seek shade and wear Sun protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure."'
    }

    console.log(index, risk, uvRec)
  return (
    <div className="analysis">
        <h1>UV Index Analysis</h1>
        <table>
            <tr>
                <td>Today's UV index:</td>
                <td>{uvIndex}</td>
            </tr>
            <tr>
                <td>Risk</td>
                <td>The risk of harm from unprotected Sun exposure, for the average adult is <b>{risk}</b></td>
            </tr>
            <tr>
                <td>Advice</td>
                <td>According to the World Health Organization, you should {uvRec[risk]}</td>
            </tr>
        </table>
    </div>
  );
}

export default Results;