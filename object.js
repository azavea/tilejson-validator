/**
 * Validates a TileJSON Object
 * @param {object} TileJSON object
 * @returns {boolean} true if the validation is successful, false otherwise
 */
function validate(tj) {
    if (Object.prototype.hasOwnProperty.call(tj, 'tilejson')) {
        if (tj.tilejson !== '2.2.0') {
            return false;
        }
    } else {
        return false;
    }

    if (Object.prototype.hasOwnProperty.call(tj, 'name')) {
        if (typeof tj.name !== 'string') {
            return false;
        }
    }

    if (Object.prototype.hasOwnProperty.call(tj, 'description')) {
        if (typeof tj.description !== 'string') {
            return false;
        }
    }

    if (Object.prototype.hasOwnProperty.call(tj, 'version')) {
        if (typeof tj.version !== 'string') {
            return false;
        }
    }

    if (Object.prototype.hasOwnProperty.call(tj, 'attribution')) {
        if (typeof tj.attribution !== 'string') {
            return false;
        }
    }

    if (Object.prototype.hasOwnProperty.call(tj, 'template')) {
        if (typeof tj.template !== 'string') {
            return false;
        }
    }

    if (Object.prototype.hasOwnProperty.call(tj, 'legend')) {
        if (typeof tj.legend !== 'string') {
            return false;
        }
    }

    if (Object.prototype.hasOwnProperty.call(tj, 'scheme')) {
        if (typeof tj.scheme !== 'string') {
            return false;
        }
        if (tj.scheme !== 'xyz' && tj.scheme !== 'tms') {
            return false;
        }
    }

    if (Object.prototype.hasOwnProperty.call(tj, 'tiles')) {
        if (tj.tiles.constructor !== Array) {
            return false;
        }
        if (tj.tiles.length < 1) {
            return false;
        }
        for (let i = 0; i < tj.tiles.length; i += 1) {
            if (typeof tj.tiles[i] !== 'string') {
                return false;
            }
        }
    } else {
        return false;
    }

    if (Object.prototype.hasOwnProperty.call(tj, 'grids')) {
        if (tj.grids.constructor !== Array) {
            return false;
        }
        for (let i = 0; i < tj.grids.length; i += 1) {
            if (typeof tj.grids[i] !== 'string') {
                return false;
            }
        }
    }

    if (Object.prototype.hasOwnProperty.call(tj, 'data')) {
        if (tj.data.constructor !== Array) {
            return false;
        }
        for (let i = 0; i < tj.data.length; i += 1) {
            if (typeof tj.data[i] !== 'string') {
                return false;
            }
        }
    }

    let minzoom = 0;
    if (Object.prototype.hasOwnProperty.call(tj, 'minzoom')) {
        if (typeof tj.minzoom !== 'number') {
            return false;
        }
        if (!Number.isInteger(tj.minzoom)) {
            return false;
        }
        if (tj.minzoom < 0 || tj.minzoom > 30) {
            return false;
        }
        minzoom = tj.minzoom;
    }

    let maxzoom = 30;
    if (Object.prototype.hasOwnProperty.call(tj, 'maxzoom')) {
        if (typeof tj.maxzoom !== 'number') {
            return false;
        }
        if (!Number.isInteger(tj.maxzoom)) {
            return false;
        }
        if (tj.maxzoom < 0 || tj.maxzoom > 30) {
            return false;
        }
        maxzoom = tj.maxzoom;
    }

    if (minzoom > maxzoom) {
        return false;
    }

    if (Object.prototype.hasOwnProperty.call(tj, 'bounds')) {
        if (tj.bounds.constructor !== Array) {
            return false;
        }
        for (let i = 0; i < tj.bounds.length; i += 1) {
            if (typeof tj.bounds[i] !== 'number') {
                return false;
            }
        }
    }

    if (Object.prototype.hasOwnProperty.call(tj, 'center')) {
        if (tj.center.constructor !== Array) {
            return false;
        }
        for (let i = 0; i < tj.center.length; i += 1) {
            if (typeof tj.center[i] !== 'number') {
                return false;
            }
        }
    }
    return true;
}

module.exports.validate = validate;
