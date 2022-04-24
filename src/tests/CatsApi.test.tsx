import React from "react";
import useCats from "../hooks/useCats";
import useAppointment from "../hooks/useAppointment";
import FetchOptions from "../interfaces/FetchOptions";
import { renderHook, act } from '@testing-library/react-hooks'

it("fetch cats api without errors", async() => {
    const options: FetchOptions = { wantedCat: undefined };
    const { result } = await renderHook(() => useCats(options));
    await act(async() =>{
        await result.current.fetchCats();
    })
    expect(result.current.data.length).toBeGreaterThan(0);
});


it("fetch appointment api without errors", async() => {
    const { result } = renderHook(() => useAppointment());
    await act(async() => {
        await result.current.fetchAppointment(1);
    })
    expect(result.current.appointmentObject).toHaveProperty("appointment");
});
