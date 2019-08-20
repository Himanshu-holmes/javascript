/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1LabelSelector } from './v1LabelSelector';

/**
* MetricIdentifier defines the name and optionally selector for a metric
*/
export class V2beta2MetricIdentifier {
    /**
    * name is the name of the given metric
    */
    'name': string;
    'selector'?: V1LabelSelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "V1LabelSelector"
        }    ];

    static getAttributeTypeMap() {
        return V2beta2MetricIdentifier.attributeTypeMap;
    }
}
