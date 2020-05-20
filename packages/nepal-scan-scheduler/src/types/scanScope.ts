/**
 * ScanScheduler Service
 * Advanced Scan Scheduling API
 *
 * OpenAPI spec version: 2.0
 * Contact: support@alertlogic.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ScanScopeItemAsset } from './scanScopeItemAsset';
import { ScanScopeItemCIDR } from './scanScopeItemCIDR';
import { ScanScopeItemIPRange } from './scanScopeItemIPRange';
import { ScanScopeItemTag } from './scanScopeItemTag';

/**
 * Specifies what assets are considered to be scanned within designated periods defined by
 * `scan_windows` parameter, setting the SLA as specified by `scan_frequency` parameter.
 */
export interface ScanScope {
    /**
     * When set to `true` all assets in the scope of deployment's protection are included within the schedule.
     * Values specified in `include` array will not be taken into account.
     */
    include_all_assets?: boolean;
    include?: (ScanScopeItemAsset | ScanScopeItemCIDR | ScanScopeItemIPRange | ScanScopeItemTag)[];
}
