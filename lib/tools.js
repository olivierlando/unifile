'use strict';

/**
 * Merge infos provided by the user with the connector defaults
 * @params {Object} newInfos - Infos provided by the user.
 * @params {Object} defaults - Defaults of the connector.
 */
module.exports.mergeInfos = function(newInfos, defaults) {
  let infos;
  if(!newInfos) infos = {};
  else if(typeof newInfos !== 'object') {
    console.warn('Infos must be an object. Provided infos are ignored.');
    infos = {};
  } else infos = newInfos;

  return {
    name: infos.name || defaults.name,
    displayName: infos.displayName || defaults.displayName,
    icon: infos.icon || defaults.icon,
    description: infos.description || defaults.description
  };
};