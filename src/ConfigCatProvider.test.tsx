import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { PollingMode } from "./PollingMode";
import ConfigCatProvider from "./ConfigCatProvider";
import { DataGovernance } from '.';

const sdkKey = "PKDVCLf-Hq-h-kCzMp-L7Q/psuH7BGHoUmdONrzzUOY7A";

afterEach(cleanup)

it("Default initialization fails without SDK Key", async () => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => { });

    expect(() => render(<ConfigCatProvider sdkKey="" />))
        .toThrow("Invalid 'apiKey' value");
    spy.mockRestore();
});

it("Default initialization works", async () => {
    render(<ConfigCatProvider
        sdkKey={sdkKey} />);
});

it("Default initialization works with Datagovernance", async () => {
    render(<ConfigCatProvider
        sdkKey={sdkKey} options={{ dataGovernance: DataGovernance.EuOnly }} />);
});

it("AutoPoll simple initialization works", () => {
    render(<ConfigCatProvider
        sdkKey={sdkKey}
        pollingMode={PollingMode.AutoPoll} />);
});

it("AutoPoll advanced initialization works", () => {
    render(<ConfigCatProvider
        sdkKey={sdkKey}
        pollingMode={PollingMode.AutoPoll}
        options={{ pollIntervalSeconds: 30, maxInitWaitTimeSeconds: 20 }} />);
});

it("AutoPoll initialization wrong pollIntervalSeconds parameter fails", () => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => { });

    expect(() =>
        render(<ConfigCatProvider
            sdkKey={sdkKey}
            pollingMode={PollingMode.AutoPoll}
            options={{ pollIntervalSeconds: -1, maxInitWaitTimeSeconds: 20 }} />))
        .toThrow("Invalid 'pollIntervalSeconds' value");
    spy.mockRestore();
});


it("AutoPoll initialization wrong maxInitWaitTimeSeconds parameter fails", () => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => { });

    expect(() =>
        render(<ConfigCatProvider
            sdkKey={sdkKey}
            pollingMode={PollingMode.AutoPoll}
            options={{ maxInitWaitTimeSeconds: -1 }} />))
        .toThrow("Invalid 'maxInitWaitTimeSeconds' value");
    spy.mockRestore();
});

it("ManualPoll simple initialization works", () => {
    render(<ConfigCatProvider sdkKey={sdkKey} pollingMode={PollingMode.ManualPoll} />);
});

it("ManualPoll initialization wrong requestTimeoutMs fails", () => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => { });

    expect(() =>
        render(<ConfigCatProvider sdkKey={sdkKey}
            pollingMode={PollingMode.ManualPoll}
            options={{ requestTimeoutMs: -1 }} />))
        .toThrow("Invalid 'requestTimeoutMs' value");
    spy.mockRestore();
});


it("LazyLoad simple initialization works", () => {
    render(<ConfigCatProvider sdkKey={sdkKey}
        pollingMode={PollingMode.LazyLoad} />);
});

it("LazyLoad advanced initialization works", () => {
    render(<ConfigCatProvider sdkKey={sdkKey}
        pollingMode={PollingMode.ManualPoll}
        options={{ cacheTimeToLiveSeconds: 30 }} />);
});

it("LazyLoad initialization with wrong cacheTimeToLiveSeconds fails", () => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => { });

    expect(() =>
        render(<ConfigCatProvider sdkKey={sdkKey}
            pollingMode={PollingMode.LazyLoad}
            options={{ cacheTimeToLiveSeconds: -1 }} />))
        .toThrow("Invalid 'cacheTimeToLiveSeconds' value. Value must be greater than zero.");

    spy.mockRestore();
});
