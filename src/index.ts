import type { IAutoPollOptions, IConfigCatLogger, ILazyLoadingOptions, IManualPollOptions, LogLevel } from "configcat-common";
import * as configcatcommon from "configcat-common";
import { FlagOverrides, MapOverrideDataSource } from "configcat-common";
import type { GetValueType, WithConfigCatClientProps } from "./ConfigCatHOC";
import withConfigCatClient from "./ConfigCatHOC";
import { useConfigCatClient, useFeatureFlag } from "./ConfigCatHooks";
import ConfigCatProvider from "./ConfigCatProvider";

export function createConsoleLogger(logLevel: LogLevel): IConfigCatLogger {
  return configcatcommon.createConsoleLogger(logLevel);
}

export function createFlagOverridesFromMap(map: { [name: string]: any }, behaviour: number): FlagOverrides {
  return new FlagOverrides(new MapOverrideDataSource(map), behaviour);
}

export type IReactAutoPollOptions = IAutoPollOptions;

export type IReactLazyLoadingOptions = ILazyLoadingOptions;

export type IReactManualPollOptions = IManualPollOptions;

export type IReactConfigCatLogger = IConfigCatLogger;

export type { WithConfigCatClientProps, GetValueType };
export { ConfigCatProvider, useFeatureFlag, useConfigCatClient, withConfigCatClient };

/* Public types re-export from common-js */

// These exports should be kept in sync with the exports listed in the section "Public types for end users" of common-js/src/index.ts!

export { PollingMode } from "configcat-common";

export type { IOptions } from "configcat-common";

export type { IAutoPollOptions, IManualPollOptions, ILazyLoadingOptions } from "configcat-common";

export { DataGovernance } from "configcat-common";

export type { IConfigCatLogger } from "configcat-common";

export { LogLevel } from "configcat-common";

export type { ICache } from "configcat-common";

export { ProjectConfig, RolloutRule, RolloutPercentageItem, Setting } from "configcat-common";

export type { IConfigCatClient } from "configcat-common";

export { SettingKeyValue } from "configcat-common";

export type { IEvaluationDetails, SettingTypeOf, SettingValue, VariationIdTypeOf, VariationIdValue } from "configcat-common";

export { User } from "configcat-common";

export type { IOverrideDataSource } from "configcat-common";

export { FlagOverrides, MapOverrideDataSource, OverrideBehaviour } from "configcat-common";

export { RefreshResult } from "configcat-common";

export type { IProvidesHooks, HookEvents } from "configcat-common";
