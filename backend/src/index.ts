import migration from './bootstrap/migrate';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data structure,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    try {
      await migration.migrate(strapi);
    } catch (error) {
      console.error('Migration error:', error);
    }
  },
};
