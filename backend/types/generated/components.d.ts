import type { Schema, Struct } from '@strapi/strapi';

export interface ImageBeforeAfter extends Struct.ComponentSchema {
  collectionName: 'components_image_before_afters';
  info: {
    description: 'Before and after image pair component';
    displayName: 'Before After';
    icon: 'images';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    afterImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    beforeImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'image.before-after': ImageBeforeAfter;
    }
  }
}
