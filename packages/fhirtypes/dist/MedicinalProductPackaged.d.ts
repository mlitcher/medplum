/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { DeviceDefinition } from './DeviceDefinition';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { MarketingStatus } from './MarketingStatus';
import { MedicinalProduct } from './MedicinalProduct';
import { MedicinalProductAuthorization } from './MedicinalProductAuthorization';
import { MedicinalProductManufactured } from './MedicinalProductManufactured';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { ProdCharacteristic } from './ProdCharacteristic';
import { ProductShelfLife } from './ProductShelfLife';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * A medicinal product in a container or package.
 */
export interface MedicinalProductPackaged {

  /**
   * This is a MedicinalProductPackaged resource
   */
  readonly resourceType: 'MedicinalProductPackaged';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Unique identifier.
   */
  identifier?: Identifier[];

  /**
   * The product with this is a pack for.
   */
  subject?: Reference<MedicinalProduct>[];

  /**
   * Textual description.
   */
  description?: string;

  /**
   * The legal status of supply of the medicinal product as classified by
   * the regulator.
   */
  legalStatusOfSupply?: CodeableConcept;

  /**
   * Marketing information.
   */
  marketingStatus?: MarketingStatus[];

  /**
   * Manufacturer of this Package Item.
   */
  marketingAuthorization?: Reference<MedicinalProductAuthorization>;

  /**
   * Manufacturer of this Package Item.
   */
  manufacturer?: Reference<Organization>[];

  /**
   * Batch numbering.
   */
  batchIdentifier?: MedicinalProductPackagedBatchIdentifier[];

  /**
   * A packaging item, as a contained for medicine, possibly with other
   * packaging items within.
   */
  packageItem: MedicinalProductPackagedPackageItem[];
}

/**
 * Batch numbering.
 */
export interface MedicinalProductPackagedBatchIdentifier {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * A number appearing on the outer packaging of a specific batch.
   */
  outerPackaging: Identifier;

  /**
   * A number appearing on the immediate packaging (and not the outer
   * packaging).
   */
  immediatePackaging?: Identifier;
}

/**
 * A packaging item, as a contained for medicine, possibly with other
 * packaging items within.
 */
export interface MedicinalProductPackagedPackageItem {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Including possibly Data Carrier Identifier.
   */
  identifier?: Identifier[];

  /**
   * The physical type of the container of the medicine.
   */
  type: CodeableConcept;

  /**
   * The quantity of this package in the medicinal product, at the current
   * level of packaging. The outermost is always 1.
   */
  quantity: Quantity;

  /**
   * Material type of the package item.
   */
  material?: CodeableConcept[];

  /**
   * A possible alternate material for the packaging.
   */
  alternateMaterial?: CodeableConcept[];

  /**
   * A device accompanying a medicinal product.
   */
  device?: Reference<DeviceDefinition>[];

  /**
   * The manufactured item as contained in the packaged medicinal product.
   */
  manufacturedItem?: Reference<MedicinalProductManufactured>[];

  /**
   * Allows containers within containers.
   */
  packageItem?: MedicinalProductPackagedPackageItem[];

  /**
   * Dimensions, color etc.
   */
  physicalCharacteristics?: ProdCharacteristic;

  /**
   * Other codeable characteristics.
   */
  otherCharacteristics?: CodeableConcept[];

  /**
   * Shelf Life and storage information.
   */
  shelfLifeStorage?: ProductShelfLife[];

  /**
   * Manufacturer of this Package Item.
   */
  manufacturer?: Reference<Organization>[];
}
