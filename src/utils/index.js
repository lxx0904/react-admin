const transformToTree = (sNodes, setting = {}) => {
    let set = {
        children: "children",
        idKey: "id",
        pIdKey: "pId",
        label: 'name',
        ...setting
    };
    let i, l,
        key = set.idKey,
        parentKey = set.pIdKey,
        childKey = set.children;
    if (!key || key === "" || !sNodes) return [];

    if (Array.isArray(sNodes)) {
        var r = [];
        var tmpMap = [];
        for (i = 0, l = sNodes.length; i < l; i++) {
            tmpMap[sNodes[i][key]] = sNodes[i];
        }
        for (i = 0, l = sNodes.length; i < l; i++) {
            if (tmpMap[sNodes[i][parentKey]]) {
                if (!tmpMap[sNodes[i][parentKey]][childKey]) tmpMap[sNodes[i][parentKey]][childKey] = [];
                tmpMap[sNodes[i][parentKey]][childKey].push(sNodes[i]);
            } else {
                r.push(sNodes[i]);
            }
        }
        return r;
    } else {
        return [sNodes];
    }
}

export default {
    transformToTree
}