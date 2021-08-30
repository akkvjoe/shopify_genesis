if (
  typeof mouseflow === "undefined" &&
  typeof mouseflowPlayback === "undefined"
) {
  (function () {
    var _hyper_all = "https://genesis-ai-test.herokuapp.com/data_post_test/";
    var _380 = false;
    var _382 = false;
    var _400 = [];
    var _395 = [];
    var _142 = "https://app.mouseflow.com";
    var _7 = new _644(window, _380, _382);
    _7._229 = [];
    _7._228 = [];
    _7._301 = [];
    _7._43 = "33c138d6-10d2-4e97-8e73-d3fdb8db6315";
    function _601(_2, _105, _7, _23, _9, _226, _18, _170, _125, _387, _10) {
      var _784 = false;
      var _130 = "https://o2.mouseflow.com/";
      var _188 = 100.0;
      var _140 = [];
      var _668 = [];
      var _243 = ["akkvjoe.w3spaces.com"];
      var _592 = false;
      var _787 = false;
      var _219 = "17.49";
      var _309 = false;
      var _590 = false;
      var _75 = false;
      var _182 = false;
      var _325 = false;
      var _538 = /\[(\d+)\]_mf$/;
      var _11 = _2.document;
      var _88 = _2.location;
      _653();
      var _12 = _662();
      var _0 = _447();
      var _56 = {
        _492: 100,
        _663: 250,
        _656: 10000,
        _507: 1336,
        _347: 1800000,
        _766: 3600000,
        _797: 7776000000,
        _844: 100,
        _763: 2000,
        _607: 8000,
        _259: 2048,
      };
      var _352,
        _354,
        _355,
        _214,
        _237,
        _208,
        _332,
        _278,
        _134,
        _320 = [],
        _322 = [];
      var _5 = {
        _308: 0,
        _303: 1,
        _304: 2,
        _286: 3,
        _284: 4,
        _283: 5,
        _282: 6,
        _180: 7,
        _345: 8,
        _279: 9,
        _217: 10,
        _459: 11,
        _430: 12,
        _290: 13,
        _587: 14,
        _76: 15,
        _909: 16,
        _908: 17,
        _98: 18,
        _315: 19,
        _696: 20,
        _344: 21,
        _343: 22,
        _297: 23,
        _342: 24,
        _341: 25,
        _340: 26,
        _339: 27,
        _338: 28,
        _462: 29,
        _337: 30,
        _460: 31,
        _336: 32,
        _296: 33,
        _617: 34,
        _179: 35,
        _437: 36,
        _436: 37,
        _49: 38,
        _348: 39,
        _849: 40,
        _221: 41,
        _92: 42,
      };
      var _91 = {
        _627: { _19: "bounce", _4: 2, _48: 1 },
        _886: { _19: "click-rage", _4: 5, _48: 2 },
        _530: { _19: "click-error", _4: 2, _48: 3 },
        _501: { _19: "mobility", _4: 3, _48: 4 },
        _180: { _19: "mouse-out", _4: 1, _48: 5 },
        _536: { _19: "speed-browsing", _4: 1, _48: 6 },
        _179: { _19: "submit-failure", _4: 3, _48: 7 },
      };
      var _669 = /[\x20\r\n]+/g;
      var _686 =
        /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@/;
      var _688 =
        /(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})/;
      var _723 =
        /^(onbeforeunload|onblur|onchange|onclick|onfocus|oninput|onkeydown|onkeypress|onkeyup|onload|onmousedown|onmouseenter|onmouseleave|onmousemove|onmouseout|onmouseover|onmouseup|onresize|onsubmit|ontouchcancel|ontouchend|ontouchenter|ontouchleave|ontouchmove|ontouchstart|onunload)$/;
      var _699 = /checkbox|radio|button|submit|file|image|reset/;
      function _603() {
        _2._mfq = [];
      }
      function _653() {
        if (!_2._mfq) _603();
        for (var _50 = 0; _50 < _2._mfq.length; _50++) {
          var _46 = _2._mfq[_50];
          if (_46 && _46.length && _46[0] === "config")
            _7._575.apply(_7, _46.slice(1));
        }
      }
      function _557(_295) {
        if (!_295) _295 = [];
        var _47 = this;
        _2.setTimeout(function () {
          for (var _50 = 0; _50 < _295.length; _50++) _47.push(_295[_50]);
        }, 1);
      }
      _557.prototype.push = function (_46) {
        if (!_46) return;
        try {
          if (typeof _46 === "object" && _46.length) {
            mouseflow[_46.slice(0, 1)].apply(mouseflow, _46.slice(1));
          } else if (typeof _46 === "function") {
            _46(mouseflow);
          }
        } catch (error) {
          var _163 = "Failed to execute item on action queue";
          var _576 = _9._69(_46);
          if (_576) _163 += "\n" + _576;
          _163 += "\n" + error;
          _10(_163, _14());
        }
      };
      // Copyright 2011 Google Inc.
      //
      // Licensed under the Apache License, Version 2.0 (the "License");
      // you may not use this file except in compliance with the License.
      // You may obtain a copy of the License at
      //
      //     http://www.apache.org/licenses/LICENSE-2.0
      //
      // Unless required by applicable law or agreed to in writing, software
      // distributed under the License is distributed on an "AS IS" BASIS,
      // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      // See the License for the specific language governing permissions and
      // limitations under the License.
      //
      // This component contains modifications carried out by Mouseflow ApS.
      var __extends =
        this.__extends ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
          function __() {
            this.constructor = d;
          }
          __.prototype = b.prototype;
          d.prototype = new __();
        };
      var MutationObserverCtor;
      if (typeof WebKitMutationObserver !== "undefined")
        MutationObserverCtor = WebKitMutationObserver;
      else if (typeof MutationObserver !== "undefined")
        MutationObserverCtor = MutationObserver;
      if (MutationObserverCtor === undefined) {
        _10("DOM Mutation Observers not supported.", _14());
      }
      var NodeMap = (function () {
        function NodeMap() {
          this.nodes = [];
          this.values = [];
        }
        NodeMap.prototype.isIndex = function (s) {
          return +s === s >>> 0;
        };
        NodeMap.prototype.nodeId = function (node) {
          var id = node[NodeMap.ID_PROP];
          if (!id) id = node[NodeMap.ID_PROP] = NodeMap.nextId_++;
          return id;
        };
        NodeMap.prototype.set = function (node, value) {
          var id = this.nodeId(node);
          this.nodes[id] = node;
          this.values[id] = value;
        };
        NodeMap.prototype.get = function (node) {
          var id = this.nodeId(node);
          return this.values[id];
        };
        NodeMap.prototype.has = function (node) {
          return this.nodeId(node) in this.nodes;
        };
        NodeMap.prototype.deleteNode = function (node) {
          var id = this.nodeId(node);
          delete this.nodes[id];
          this.values[id] = undefined;
        };
        NodeMap.prototype.keys = function () {
          var nodes = [];
          for (var id in this.nodes) {
            if (!this.isIndex(id)) continue;
            nodes.push(this.nodes[id]);
          }
          return nodes;
        };
        NodeMap.ID_PROP = "__mouseflow_node_map_id__";
        NodeMap.nextId_ = 1;
        return NodeMap;
      })();
      var Movement;
      (function (Movement) {
        Movement[(Movement["STAYED_OUT"] = 0)] = "STAYED_OUT";
        Movement[(Movement["ENTERED"] = 1)] = "ENTERED";
        Movement[(Movement["STAYED_IN"] = 2)] = "STAYED_IN";
        Movement[(Movement["REPARENTED"] = 3)] = "REPARENTED";
        Movement[(Movement["REORDERED"] = 4)] = "REORDERED";
        Movement[(Movement["EXITED"] = 5)] = "EXITED";
      })(Movement || (Movement = {}));
      function enteredOrExited(changeType) {
        return (
          changeType === Movement.ENTERED || changeType === Movement.EXITED
        );
      }
      var NodeChange = (function () {
        function NodeChange(
          node,
          childList,
          attributes,
          characterData,
          oldParentNode,
          added,
          attributeOldValues,
          characterDataOldValue
        ) {
          if (childList === void 0) {
            childList = false;
          }
          if (attributes === void 0) {
            attributes = false;
          }
          if (characterData === void 0) {
            characterData = false;
          }
          if (oldParentNode === void 0) {
            oldParentNode = null;
          }
          if (added === void 0) {
            added = false;
          }
          if (attributeOldValues === void 0) {
            attributeOldValues = null;
          }
          if (characterDataOldValue === void 0) {
            characterDataOldValue = null;
          }
          this.node = node;
          this.childList = childList;
          this.attributes = attributes;
          this.characterData = characterData;
          this.oldParentNode = oldParentNode;
          this.added = added;
          this.attributeOldValues = attributeOldValues;
          this.characterDataOldValue = characterDataOldValue;
          this.isCaseInsensitive =
            this.node.nodeType === 1 &&
            this.node instanceof HTMLElement &&
            typeof HTMLDocument !== "undefined" &&
            this.node.ownerDocument instanceof HTMLDocument;
        }
        NodeChange.prototype.getAttributeOldValue = function (name) {
          if (!this.attributeOldValues) return undefined;
          if (this.isCaseInsensitive) name = name.toLowerCase();
          return this.attributeOldValues[name];
        };
        NodeChange.prototype.getAttributeNamesMutated = function () {
          var names = [];
          if (!this.attributeOldValues) return names;
          for (var name in this.attributeOldValues) {
            names.push(name);
          }
          return names;
        };
        NodeChange.prototype.attributeMutated = function (name, oldValue) {
          this.attributes = true;
          this.attributeOldValues = this.attributeOldValues || {};
          if (name in this.attributeOldValues) return;
          this.attributeOldValues[name] = oldValue;
        };
        NodeChange.prototype.characterDataMutated = function (oldValue) {
          if (this.characterData) return;
          this.characterData = true;
          this.characterDataOldValue = oldValue;
        };
        NodeChange.prototype.removedFromParent = function (parent) {
          this.childList = true;
          if (this.added || this.oldParentNode) this.added = false;
          else this.oldParentNode = parent;
        };
        NodeChange.prototype.insertedIntoParent = function () {
          this.childList = true;
          this.added = true;
        };
        NodeChange.prototype.getOldParent = function () {
          if (this.childList) {
            if (this.oldParentNode) return this.oldParentNode;
            if (this.added) return null;
          }
          return this.node.parentNode;
        };
        return NodeChange;
      })();
      var ChildListChange = (function () {
        function ChildListChange() {
          this.added = new NodeMap();
          this.removed = new NodeMap();
          this.maybeMoved = new NodeMap();
          this.oldPrevious = new NodeMap();
          this.moved = undefined;
        }
        return ChildListChange;
      })();
      var TreeChanges = (function (_584) {
        __extends(TreeChanges, _584);
        function TreeChanges(rootNode, mutations) {
          _584.call(this);
          this.rootNode = rootNode;
          this.reachableCache = undefined;
          this.wasReachableCache = undefined;
          this.anyParentsChanged = false;
          this.anyAttributesChanged = false;
          this.anyCharacterDataChanged = false;
          for (var m = 0; m < mutations.length; m++) {
            var mutation = mutations[m];
            switch (mutation.type) {
              case "childList":
                this.anyParentsChanged = true;
                for (var i = 0; i < mutation.removedNodes.length; i++) {
                  var node = mutation.removedNodes[i];
                  this.getChange(node).removedFromParent(mutation.target);
                }
                for (var i = 0; i < mutation.addedNodes.length; i++) {
                  var node = mutation.addedNodes[i];
                  this.getChange(node).insertedIntoParent();
                }
                break;
              case "attributes":
                this.anyAttributesChanged = true;
                var change = this.getChange(mutation.target);
                change.attributeMutated(
                  mutation.attributeName,
                  mutation.oldValue
                );
                break;
              case "characterData":
                this.anyCharacterDataChanged = true;
                var change = this.getChange(mutation.target);
                change.characterDataMutated(mutation.oldValue);
                break;
            }
          }
        }
        TreeChanges.prototype.getChange = function (node) {
          var change = this.get(node);
          if (!change) {
            change = new NodeChange(node);
            this.set(node, change);
          }
          return change;
        };
        TreeChanges.prototype.getOldParent = function (node) {
          var change = this.get(node);
          return change ? change.getOldParent() : node.parentNode;
        };
        TreeChanges.prototype.getIsReachable = function (node) {
          if (node === this.rootNode) return true;
          if (!node) return false;
          this.reachableCache = this.reachableCache || new NodeMap();
          var isReachable = this.reachableCache.get(node);
          if (isReachable === undefined) {
            isReachable = this.getIsReachable(node.parentNode);
            this.reachableCache.set(node, isReachable);
          }
          return isReachable;
        };
        TreeChanges.prototype.getWasReachable = function (node) {
          if (node === this.rootNode) return true;
          if (!node) return false;
          this.wasReachableCache = this.wasReachableCache || new NodeMap();
          var wasReachable = this.wasReachableCache.get(node);
          if (wasReachable === undefined) {
            wasReachable = this.getWasReachable(this.getOldParent(node));
            this.wasReachableCache.set(node, wasReachable);
          }
          return wasReachable;
        };
        TreeChanges.prototype.reachabilityChange = function (node) {
          if (this.getIsReachable(node)) {
            return this.getWasReachable(node)
              ? Movement.STAYED_IN
              : Movement.ENTERED;
          }
          return this.getWasReachable(node)
            ? Movement.EXITED
            : Movement.STAYED_OUT;
        };
        return TreeChanges;
      })(NodeMap);
      var MutationProjection = (function () {
        function MutationProjection(
          rootNode,
          mutations,
          selectors,
          calcReordered,
          calcOldPreviousSibling
        ) {
          this.rootNode = rootNode;
          this.mutations = mutations;
          this.selectors = selectors;
          this.calcReordered = calcReordered;
          this.calcOldPreviousSibling = calcOldPreviousSibling;
          this.treeChanges = new TreeChanges(rootNode, mutations);
          this.entered = [];
          this.exited = [];
          this.stayedIn = new NodeMap();
          this.visited = new NodeMap();
          this.childListChangeMap = undefined;
          this.characterDataOnly = undefined;
          this.matchCache = undefined;
          this.processMutations();
        }
        MutationProjection.prototype.processMutations = function () {
          if (
            !this.treeChanges.anyParentsChanged &&
            !this.treeChanges.anyAttributesChanged
          )
            return;
          var changedNodes = this.treeChanges.keys();
          for (var i = 0; i < changedNodes.length; i++) {
            this.visitNode(changedNodes[i], undefined);
          }
        };
        MutationProjection.prototype.visitNode = function (
          node,
          parentReachable
        ) {
          if (this.visited.has(node)) return;
          this.visited.set(node, true);
          var change = this.treeChanges.get(node);
          var reachable = parentReachable;
          if ((change && change.childList) || reachable == undefined)
            reachable = this.treeChanges.reachabilityChange(node);
          if (reachable === Movement.STAYED_OUT) return;
          this.matchabilityChange(node);
          if (reachable === Movement.ENTERED) {
            this.entered.push(node);
          } else if (reachable === Movement.EXITED) {
            this.exited.push(node);
            this.ensureHasOldPreviousSiblingIfNeeded(node);
          } else if (reachable === Movement.STAYED_IN) {
            var movement = Movement.STAYED_IN;
            if (change && change.childList) {
              if (change.oldParentNode !== node.parentNode) {
                movement = Movement.REPARENTED;
                this.ensureHasOldPreviousSiblingIfNeeded(node);
              } else if (this.calcReordered && this.wasReordered(node)) {
                movement = Movement.REORDERED;
              }
            }
            this.stayedIn.set(node, movement);
          }
          if (reachable === Movement.STAYED_IN) return;
          for (var child = node.firstChild; child; child = child.nextSibling) {
            this.visitNode(child, reachable);
          }
        };
        MutationProjection.prototype.ensureHasOldPreviousSiblingIfNeeded =
          function (node) {
            if (!this.calcOldPreviousSibling) return;
            this.processChildlistChanges();
            var parentNode = node.parentNode;
            var nodeChange = this.treeChanges.get(node);
            if (nodeChange && nodeChange.oldParentNode)
              parentNode = nodeChange.oldParentNode;
            var change = this.childListChangeMap.get(parentNode);
            if (!change) {
              change = new ChildListChange();
              this.childListChangeMap.set(parentNode, change);
            }
            if (!change.oldPrevious.has(node)) {
              change.oldPrevious.set(node, node.previousSibling);
            }
          };
        MutationProjection.prototype.getChanged = function (
          summary,
          selectors,
          characterDataOnly
        ) {
          this.selectors = selectors;
          this.characterDataOnly = characterDataOnly;
          for (var i = 0; i < this.entered.length; i++) {
            var node = this.entered[i];
            var matchable = this.matchabilityChange(node);
            if (
              matchable === Movement.ENTERED ||
              matchable === Movement.STAYED_IN
            )
              summary.added.push(node);
          }
          var stayedInNodes = this.stayedIn.keys();
          for (var i = 0; i < stayedInNodes.length; i++) {
            var node = stayedInNodes[i];
            var matchable = this.matchabilityChange(node);
            if (matchable === Movement.ENTERED) {
              summary.added.push(node);
            } else if (matchable === Movement.EXITED) {
              summary.removed.push(node);
            } else if (
              matchable === Movement.STAYED_IN &&
              (summary.reparented || summary.reordered)
            ) {
              var movement = this.stayedIn.get(node);
              if (summary.reparented && movement === Movement.REPARENTED)
                summary.reparented.push(node);
              else if (summary.reordered && movement === Movement.REORDERED)
                summary.reordered.push(node);
            }
          }
          for (var i = 0; i < this.exited.length; i++) {
            var node = this.exited[i];
            var matchable = this.matchabilityChange(node);
            if (
              matchable === Movement.EXITED ||
              matchable === Movement.STAYED_IN
            )
              summary.removed.push(node);
          }
        };
        MutationProjection.prototype.getOldParentNode = function (node) {
          var change = this.treeChanges.get(node);
          if (change && change.childList)
            return change.oldParentNode ? change.oldParentNode : null;
          var reachabilityChange = this.treeChanges.reachabilityChange(node);
          if (
            reachabilityChange === Movement.STAYED_OUT ||
            reachabilityChange === Movement.ENTERED
          )
            throw Error("getOldParentNode requested on invalid node.");
          return node.parentNode;
        };
        MutationProjection.prototype.getOldPreviousSibling = function (node) {
          var parentNode = node.parentNode;
          var nodeChange = this.treeChanges.get(node);
          if (nodeChange && nodeChange.oldParentNode)
            parentNode = nodeChange.oldParentNode;
          var change = this.childListChangeMap.get(parentNode);
          if (!change)
            throw Error("getOldPreviousSibling requested on invalid node.");
          return change.oldPrevious.get(node);
        };
        MutationProjection.prototype.getOldAttribute = function (
          element,
          attrName
        ) {
          var change = this.treeChanges.get(element);
          if (!change || !change.attributes)
            throw Error("getOldAttribute requested on invalid node.");
          var value = change.getAttributeOldValue(attrName);
          if (value === undefined)
            throw Error(
              "getOldAttribute requested for unchanged attribute name."
            );
          return value;
        };
        MutationProjection.prototype.attributeChangedNodes = function (
          includeAttributes
        ) {
          if (!this.treeChanges.anyAttributesChanged) return {};
          var attributeFilter;
          var caseInsensitiveFilter;
          if (includeAttributes) {
            attributeFilter = {};
            caseInsensitiveFilter = {};
            for (var i = 0; i < includeAttributes.length; i++) {
              var attrName = includeAttributes[i];
              attributeFilter[attrName] = true;
              caseInsensitiveFilter[attrName.toLowerCase()] = attrName;
            }
          }
          var result = {};
          var nodes = this.treeChanges.keys();
          for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            var change = this.treeChanges.get(node);
            if (!change.attributes) continue;
            if (
              Movement.STAYED_IN !==
                this.treeChanges.reachabilityChange(node) ||
              Movement.STAYED_IN !== this.matchabilityChange(node)
            ) {
              continue;
            }
            var element = node;
            var changedAttrNames = change.getAttributeNamesMutated();
            for (var j = 0; j < changedAttrNames.length; j++) {
              var attrName = changedAttrNames[j];
              if (
                attributeFilter &&
                !attributeFilter[attrName] &&
                !(change.isCaseInsensitive && caseInsensitiveFilter[attrName])
              ) {
                continue;
              }
              var oldValue = change.getAttributeOldValue(attrName);
              if (oldValue === element.getAttribute(attrName)) continue;
              if (caseInsensitiveFilter && change.isCaseInsensitive)
                attrName = caseInsensitiveFilter[attrName];
              result[attrName] = result[attrName] || [];
              result[attrName].push(element);
            }
          }
          return result;
        };
        MutationProjection.prototype.getOldCharacterData = function (node) {
          var change = this.treeChanges.get(node);
          if (!change || !change.characterData)
            throw Error("getOldCharacterData requested on invalid node.");
          return change.characterDataOldValue;
        };
        MutationProjection.prototype.getCharacterDataChanged = function () {
          if (!this.treeChanges.anyCharacterDataChanged) return [];
          var nodes = this.treeChanges.keys();
          var result = [];
          for (var i = 0; i < nodes.length; i++) {
            var target = nodes[i];
            if (
              Movement.STAYED_IN !== this.treeChanges.reachabilityChange(target)
            )
              continue;
            var change = this.treeChanges.get(target);
            if (
              !change.characterData ||
              target.textContent == change.characterDataOldValue
            )
              continue;
            result.push(target);
          }
          return result;
        };
        MutationProjection.prototype.computeMatchabilityChange = function (
          selector,
          el
        ) {
          if (!this.matchCache) this.matchCache = [];
          if (!this.matchCache[selector.uid])
            this.matchCache[selector.uid] = new NodeMap();
          var cache = this.matchCache[selector.uid];
          var result = cache.get(el);
          if (result === undefined) {
            result = selector.matchabilityChange(el, this.treeChanges.get(el));
            cache.set(el, result);
          }
          return result;
        };
        MutationProjection.prototype.matchabilityChange = function (node) {
          var _47 = this;
          if (this.characterDataOnly) {
            switch (node.nodeType) {
              case 8:
              case 3:
                return Movement.STAYED_IN;
              default:
                return Movement.STAYED_OUT;
            }
          }
          if (!this.selectors) return Movement.STAYED_IN;
          if (node.nodeType !== 1) return Movement.STAYED_OUT;
          var el = node;
          var matchChanges = this.selectors.map(function (selector) {
            return _47.computeMatchabilityChange(selector, el);
          });
          var accum = Movement.STAYED_OUT;
          var i = 0;
          while (accum !== Movement.STAYED_IN && i < matchChanges.length) {
            switch (matchChanges[i]) {
              case Movement.STAYED_IN:
                accum = Movement.STAYED_IN;
                break;
              case Movement.ENTERED:
                if (accum === Movement.EXITED) accum = Movement.STAYED_IN;
                else accum = Movement.ENTERED;
                break;
              case Movement.EXITED:
                if (accum === Movement.ENTERED) accum = Movement.STAYED_IN;
                else accum = Movement.EXITED;
                break;
            }
            i++;
          }
          return accum;
        };
        MutationProjection.prototype.getChildlistChange = function (el) {
          var change = this.childListChangeMap.get(el);
          if (!change) {
            change = new ChildListChange();
            this.childListChangeMap.set(el, change);
          }
          return change;
        };
        MutationProjection.prototype.processChildlistChanges = function () {
          if (this.childListChangeMap) return;
          this.childListChangeMap = new NodeMap();
          for (var i = 0; i < this.mutations.length; i++) {
            var mutation = this.mutations[i];
            if (mutation.type != "childList") continue;
            if (
              this.treeChanges.reachabilityChange(mutation.target) !==
                Movement.STAYED_IN &&
              !this.calcOldPreviousSibling
            )
              continue;
            var change = this.getChildlistChange(mutation.target);
            var oldPrevious = mutation.previousSibling;
            function recordOldPrevious(node, previous) {
              if (
                !node ||
                change.oldPrevious.has(node) ||
                change.added.has(node) ||
                change.maybeMoved.has(node)
              )
                return;
              if (
                previous &&
                (change.added.has(previous) || change.maybeMoved.has(previous))
              )
                return;
              change.oldPrevious.set(node, previous);
            }
            for (var j = 0; j < mutation.removedNodes.length; j++) {
              var node = mutation.removedNodes[j];
              recordOldPrevious(node, oldPrevious);
              if (change.added.has(node)) {
                change.added.deleteNode(node);
              } else {
                change.removed.set(node, true);
                change.maybeMoved.deleteNode(node);
              }
              oldPrevious = node;
            }
            recordOldPrevious(mutation.nextSibling, oldPrevious);
            for (var j = 0; j < mutation.addedNodes.length; j++) {
              var node = mutation.addedNodes[j];
              if (change.removed.has(node)) {
                change.removed.deleteNode(node);
                change.maybeMoved.set(node, true);
              } else {
                change.added.set(node, true);
              }
            }
          }
        };
        MutationProjection.prototype.wasReordered = function (node) {
          if (!this.treeChanges.anyParentsChanged) return false;
          this.processChildlistChanges();
          var parentNode = node.parentNode;
          var nodeChange = this.treeChanges.get(node);
          if (nodeChange && nodeChange.oldParentNode)
            parentNode = nodeChange.oldParentNode;
          var change = this.childListChangeMap.get(parentNode);
          if (!change) return false;
          if (change.moved) return change.moved.get(node);
          change.moved = new NodeMap();
          var pendingMoveDecision = new NodeMap();
          function isMoved(node) {
            if (!node) return false;
            if (!change.maybeMoved.has(node)) return false;
            var didMove = change.moved.get(node);
            if (didMove !== undefined) return didMove;
            if (pendingMoveDecision.has(node)) {
              didMove = true;
            } else {
              pendingMoveDecision.set(node, true);
              didMove = getPrevious(node) !== getOldPrevious(node);
            }
            if (pendingMoveDecision.has(node)) {
              pendingMoveDecision.deleteNode(node);
              change.moved.set(node, didMove);
            } else {
              didMove = change.moved.get(node);
            }
            return didMove;
          }
          var oldPreviousCache = new NodeMap();
          function getOldPrevious(node) {
            var oldPrevious = oldPreviousCache.get(node);
            if (oldPrevious !== undefined) return oldPrevious;
            oldPrevious = change.oldPrevious.get(node);
            while (
              oldPrevious &&
              (change.removed.has(oldPrevious) || isMoved(oldPrevious))
            ) {
              oldPrevious = getOldPrevious(oldPrevious);
            }
            if (oldPrevious === undefined) oldPrevious = node.previousSibling;
            oldPreviousCache.set(node, oldPrevious);
            return oldPrevious;
          }
          var previousCache = new NodeMap();
          function getPrevious(node) {
            if (previousCache.has(node)) return previousCache.get(node);
            var previous = node.previousSibling;
            while (
              previous &&
              (change.added.has(previous) || isMoved(previous))
            )
              previous = previous.previousSibling;
            previousCache.set(node, previous);
            return previous;
          }
          change.maybeMoved.keys().forEach(isMoved);
          return change.moved.get(node);
        };
        return MutationProjection;
      })();
      var Summary = (function () {
        function Summary(projection, query) {
          var _47 = this;
          this.projection = projection;
          this.added = [];
          this.removed = [];
          this.reparented =
            query.all || query.element || query.characterData ? [] : undefined;
          this.reordered = query.all ? [] : undefined;
          projection.getChanged(this, query.elementFilter, query.characterData);
          if (query.all || query.attribute || query.attributeList) {
            var filter = query.attribute
              ? [query.attribute]
              : query.attributeList;
            var attributeChanged = projection.attributeChangedNodes(filter);
            if (query.attribute) {
              this.valueChanged = attributeChanged[query.attribute] || [];
            } else {
              this.attributeChanged = attributeChanged;
              if (query.attributeList) {
                query.attributeList.forEach(function (attrName) {
                  if (!_47.attributeChanged.hasOwnProperty(attrName))
                    _47.attributeChanged[attrName] = [];
                });
              }
            }
          }
          if (query.all || query.characterData) {
            var characterDataChanged = projection.getCharacterDataChanged();
            if (query.characterData) this.valueChanged = characterDataChanged;
            else this.characterDataChanged = characterDataChanged;
          }
          if (this.reordered)
            this.getOldPreviousSibling =
              projection.getOldPreviousSibling.bind(projection);
        }
        Summary.prototype.getOldParentNode = function (node) {
          return this.projection.getOldParentNode(node);
        };
        Summary.prototype.getOldAttribute = function (node, name) {
          return this.projection.getOldAttribute(node, name);
        };
        Summary.prototype.getOldCharacterData = function (node) {
          return this.projection.getOldCharacterData(node);
        };
        Summary.prototype.getOldPreviousSibling = function (node) {
          return this.projection.getOldPreviousSibling(node);
        };
        return Summary;
      })();
      var validNameInitialChar = /[a-zA-Z_]+/;
      var validNameNonInitialChar = /[a-zA-Z0-9_\-]+/;
      function escapeQuotes(value) {
        return '"' + value.replace(/"/, '\\"') + '"';
      }
      var Qualifier = (function () {
        function Qualifier() {}
        Qualifier.prototype.matches = function (oldValue) {
          if (oldValue === null) return false;
          if (this.attrValue === undefined) return true;
          if (!this.contains) return this.attrValue == oldValue;
          var tokens = oldValue.split(" ");
          for (var i = 0; i < tokens.length; i++) {
            if (this.attrValue === tokens[i]) return true;
          }
          return false;
        };
        Qualifier.prototype.toString = function () {
          if (this.attrName === "class" && this.contains)
            return "." + this.attrValue;
          if (this.attrName === "id" && !this.contains)
            return "#" + this.attrValue;
          if (this.contains)
            return (
              "[" + this.attrName + "~=" + escapeQuotes(this.attrValue) + "]"
            );
          if ("attrValue" in this)
            return (
              "[" + this.attrName + "=" + escapeQuotes(this.attrValue) + "]"
            );
          return "[" + this.attrName + "]";
        };
        return Qualifier;
      })();
      var Selector = (function () {
        function Selector() {
          this.uid = Selector.nextUid++;
          this.qualifiers = [];
        }
        try {
          Object.defineProperty(Selector.prototype, "caseInsensitiveTagName", {
            get: function () {
              return this.tagName.toUpperCase();
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(Selector.prototype, "selectorString", {
            get: function () {
              return this.tagName + this.qualifiers.join("");
            },
            enumerable: true,
            configurable: true,
          });
        } catch (e) {}
        Selector.prototype.isMatching = function (el) {
          return el[Selector.matchesSelector](this.selectorString);
        };
        Selector.prototype.wasMatching = function (el, change, isMatching) {
          if (!change || !change.attributes) return isMatching;
          var tagName = change.isCaseInsensitive
            ? this.caseInsensitiveTagName
            : this.tagName;
          if (tagName !== "*" && tagName !== el.tagName) return false;
          var attributeOldValues = [];
          var anyChanged = false;
          for (var i = 0; i < this.qualifiers.length; i++) {
            var qualifier = this.qualifiers[i];
            var oldValue = change.getAttributeOldValue(qualifier.attrName);
            attributeOldValues.push(oldValue);
            anyChanged = anyChanged || oldValue !== undefined;
          }
          if (!anyChanged) return isMatching;
          for (var i = 0; i < this.qualifiers.length; i++) {
            var qualifier = this.qualifiers[i];
            var oldValue = attributeOldValues[i];
            if (oldValue === undefined)
              oldValue = el.getAttribute(qualifier.attrName);
            if (!qualifier.matches(oldValue)) return false;
          }
          return true;
        };
        Selector.prototype.matchabilityChange = function (el, change) {
          var isMatching = this.isMatching(el);
          if (isMatching)
            return this.wasMatching(el, change, isMatching)
              ? Movement.STAYED_IN
              : Movement.ENTERED;
          else
            return this.wasMatching(el, change, isMatching)
              ? Movement.EXITED
              : Movement.STAYED_OUT;
        };
        Selector.parseSelectors = function (input) {
          var selectors = [];
          var currentSelector;
          var currentQualifier;
          function newSelector() {
            if (currentSelector) {
              if (currentQualifier) {
                currentSelector.qualifiers.push(currentQualifier);
                currentQualifier = undefined;
              }
              selectors.push(currentSelector);
            }
            currentSelector = new Selector();
          }
          function newQualifier() {
            if (currentQualifier)
              currentSelector.qualifiers.push(currentQualifier);
            currentQualifier = new Qualifier();
          }
          var WHITESPACE = /\s/;
          var valueQuoteChar;
          var SYNTAX_ERROR = "Invalid or unsupported selector syntax.";
          var SELECTOR = 1;
          var TAG_NAME = 2;
          var QUALIFIER = 3;
          var QUALIFIER_NAME_FIRST_CHAR = 4;
          var QUALIFIER_NAME = 5;
          var ATTR_NAME_FIRST_CHAR = 6;
          var ATTR_NAME = 7;
          var EQUIV_OR_ATTR_QUAL_END = 8;
          var EQUAL = 9;
          var ATTR_QUAL_END = 10;
          var VALUE_FIRST_CHAR = 11;
          var VALUE = 12;
          var QUOTED_VALUE = 13;
          var SELECTOR_SEPARATOR = 14;
          var state = SELECTOR;
          var i = 0;
          while (i < input.length) {
            var c = input[i++];
            switch (state) {
              case SELECTOR:
                if (c.match(validNameInitialChar)) {
                  newSelector();
                  currentSelector.tagName = c;
                  state = TAG_NAME;
                  break;
                }
                if (c == "*") {
                  newSelector();
                  currentSelector.tagName = "*";
                  state = QUALIFIER;
                  break;
                }
                if (c == ".") {
                  newSelector();
                  newQualifier();
                  currentSelector.tagName = "*";
                  currentQualifier.attrName = "class";
                  currentQualifier.contains = true;
                  state = QUALIFIER_NAME_FIRST_CHAR;
                  break;
                }
                if (c == "#") {
                  newSelector();
                  newQualifier();
                  currentSelector.tagName = "*";
                  currentQualifier.attrName = "id";
                  state = QUALIFIER_NAME_FIRST_CHAR;
                  break;
                }
                if (c == "[") {
                  newSelector();
                  newQualifier();
                  currentSelector.tagName = "*";
                  currentQualifier.attrName = "";
                  state = ATTR_NAME_FIRST_CHAR;
                  break;
                }
                if (c.match(WHITESPACE)) break;
                throw Error(SYNTAX_ERROR);
              case TAG_NAME:
                if (c.match(validNameNonInitialChar)) {
                  currentSelector.tagName += c;
                  break;
                }
                if (c == ".") {
                  newQualifier();
                  currentQualifier.attrName = "class";
                  currentQualifier.contains = true;
                  state = QUALIFIER_NAME_FIRST_CHAR;
                  break;
                }
                if (c == "#") {
                  newQualifier();
                  currentQualifier.attrName = "id";
                  state = QUALIFIER_NAME_FIRST_CHAR;
                  break;
                }
                if (c == "[") {
                  newQualifier();
                  currentQualifier.attrName = "";
                  state = ATTR_NAME_FIRST_CHAR;
                  break;
                }
                if (c.match(WHITESPACE)) {
                  state = SELECTOR_SEPARATOR;
                  break;
                }
                if (c == ",") {
                  state = SELECTOR;
                  break;
                }
                throw Error(SYNTAX_ERROR);
              case QUALIFIER:
                if (c == ".") {
                  newQualifier();
                  currentQualifier.attrName = "class";
                  currentQualifier.contains = true;
                  state = QUALIFIER_NAME_FIRST_CHAR;
                  break;
                }
                if (c == "#") {
                  newQualifier();
                  currentQualifier.attrName = "id";
                  state = QUALIFIER_NAME_FIRST_CHAR;
                  break;
                }
                if (c == "[") {
                  newQualifier();
                  currentQualifier.attrName = "";
                  state = ATTR_NAME_FIRST_CHAR;
                  break;
                }
                if (c.match(WHITESPACE)) {
                  state = SELECTOR_SEPARATOR;
                  break;
                }
                if (c == ",") {
                  state = SELECTOR;
                  break;
                }
                throw Error(SYNTAX_ERROR);
              case QUALIFIER_NAME_FIRST_CHAR:
                if (c.match(validNameInitialChar)) {
                  currentQualifier.attrValue = c;
                  state = QUALIFIER_NAME;
                  break;
                }
                throw Error(SYNTAX_ERROR);
              case QUALIFIER_NAME:
                if (c.match(validNameNonInitialChar)) {
                  currentQualifier.attrValue += c;
                  break;
                }
                if (c == ".") {
                  newQualifier();
                  currentQualifier.attrName = "class";
                  currentQualifier.contains = true;
                  state = QUALIFIER_NAME_FIRST_CHAR;
                  break;
                }
                if (c == "#") {
                  newQualifier();
                  currentQualifier.attrName = "id";
                  state = QUALIFIER_NAME_FIRST_CHAR;
                  break;
                }
                if (c == "[") {
                  newQualifier();
                  state = ATTR_NAME_FIRST_CHAR;
                  break;
                }
                if (c.match(WHITESPACE)) {
                  state = SELECTOR_SEPARATOR;
                  break;
                }
                if (c == ",") {
                  state = SELECTOR;
                  break;
                }
                throw Error(SYNTAX_ERROR);
              case ATTR_NAME_FIRST_CHAR:
                if (c.match(validNameInitialChar)) {
                  currentQualifier.attrName = c;
                  state = ATTR_NAME;
                  break;
                }
                if (c.match(WHITESPACE)) break;
                throw Error(SYNTAX_ERROR);
              case ATTR_NAME:
                if (c.match(validNameNonInitialChar)) {
                  currentQualifier.attrName += c;
                  break;
                }
                if (c.match(WHITESPACE)) {
                  state = EQUIV_OR_ATTR_QUAL_END;
                  break;
                }
                if (c == "~") {
                  currentQualifier.contains = true;
                  state = EQUAL;
                  break;
                }
                if (c == "=") {
                  currentQualifier.attrValue = "";
                  state = VALUE_FIRST_CHAR;
                  break;
                }
                if (c == "]") {
                  state = QUALIFIER;
                  break;
                }
                throw Error(SYNTAX_ERROR);
              case EQUIV_OR_ATTR_QUAL_END:
                if (c == "~") {
                  currentQualifier.contains = true;
                  state = EQUAL;
                  break;
                }
                if (c == "=") {
                  currentQualifier.attrValue = "";
                  state = VALUE_FIRST_CHAR;
                  break;
                }
                if (c == "]") {
                  state = QUALIFIER;
                  break;
                }
                if (c.match(WHITESPACE)) break;
                throw Error(SYNTAX_ERROR);
              case EQUAL:
                if (c == "=") {
                  currentQualifier.attrValue = "";
                  state = VALUE_FIRST_CHAR;
                  break;
                }
                throw Error(SYNTAX_ERROR);
              case ATTR_QUAL_END:
                if (c == "]") {
                  state = QUALIFIER;
                  break;
                }
                if (c.match(WHITESPACE)) break;
                throw Error(SYNTAX_ERROR);
              case VALUE_FIRST_CHAR:
                if (c.match(WHITESPACE)) break;
                if (c == '"' || c == "'") {
                  valueQuoteChar = c;
                  state = QUOTED_VALUE;
                  break;
                }
                currentQualifier.attrValue += c;
                state = VALUE;
                break;
              case VALUE:
                if (c.match(WHITESPACE)) {
                  state = ATTR_QUAL_END;
                  break;
                }
                if (c == "]") {
                  state = QUALIFIER;
                  break;
                }
                if (c == "'" || c == '"') throw Error(SYNTAX_ERROR);
                currentQualifier.attrValue += c;
                break;
              case QUOTED_VALUE:
                if (c == valueQuoteChar) {
                  state = ATTR_QUAL_END;
                  break;
                }
                currentQualifier.attrValue += c;
                break;
              case SELECTOR_SEPARATOR:
                if (c.match(WHITESPACE)) break;
                if (c == ",") {
                  state = SELECTOR;
                  break;
                }
                throw Error(SYNTAX_ERROR);
            }
          }
          switch (state) {
            case SELECTOR:
            case TAG_NAME:
            case QUALIFIER:
            case QUALIFIER_NAME:
            case SELECTOR_SEPARATOR:
              newSelector();
              break;
            default:
              throw Error(SYNTAX_ERROR);
          }
          if (!selectors.length) throw Error(SYNTAX_ERROR);
          return selectors;
        };
        Selector.nextUid = 1;
        Selector.matchesSelector = (function () {
          var element = _11.createElement("div");
          if (typeof element["webkitMatchesSelector"] === "function")
            return "webkitMatchesSelector";
          if (typeof element["mozMatchesSelector"] === "function")
            return "mozMatchesSelector";
          if (typeof element["msMatchesSelector"] === "function")
            return "msMatchesSelector";
          return "matchesSelector";
        })();
        return Selector;
      })();
      var attributeFilterPattern = /^([a-zA-Z:_]+[a-zA-Z0-9_\-:\.]*)$/;
      function validateAttribute(attribute) {
        if (typeof attribute != "string")
          throw Error(
            "Invalid request opion. attribute must be a non-zero length string."
          );
        attribute = attribute.trim();
        if (!attribute)
          throw Error(
            "Invalid request opion. attribute must be a non-zero length string."
          );
        if (!attribute.match(attributeFilterPattern))
          throw Error(
            "Invalid request option. invalid attribute name: " + attribute
          );
        return attribute;
      }
      function validateElementAttributes(attribs) {
        if (!attribs.trim().length)
          throw Error(
            "Invalid request option: elementAttributes must contain at least one attribute."
          );
        var lowerAttributes = {};
        var attributes = {};
        var tokens = attribs.split(/\s+/);
        for (var i = 0; i < tokens.length; i++) {
          var name = tokens[i];
          if (!name) continue;
          var name = validateAttribute(name);
          var nameLower = name.toLowerCase();
          if (lowerAttributes[nameLower])
            throw Error(
              "Invalid request option: observing multiple case variations of the same attribute is not supported."
            );
          attributes[name] = true;
          lowerAttributes[nameLower] = true;
        }
        return Object.keys(attributes);
      }
      function elementFilterAttributes(selectors) {
        var attributes = {};
        selectors.forEach(function (selector) {
          selector.qualifiers.forEach(function (qualifier) {
            attributes[qualifier.attrName] = true;
          });
        });
        return Object.keys(attributes);
      }
      var MutationSummary = (function () {
        function MutationSummary(opts) {
          var _47 = this;
          this.connected = false;
          this.options = MutationSummary.validateOptions(opts);
          this.observerOptions = MutationSummary.createObserverOptions(
            this.options.queries
          );
          this.root = this.options.rootNode;
          this.callback = this.options.callback;
          this.elementFilter = Array.prototype.concat.apply(
            [],
            this.options.queries.map(function (query) {
              return query.elementFilter ? query.elementFilter : [];
            })
          );
          if (!this.elementFilter.length) this.elementFilter = undefined;
          this.calcReordered = this.options.queries.some(function (query) {
            return query.all;
          });
          this.queryValidators = [];
          if (MutationSummary.createQueryValidator) {
            this.queryValidators = this.options.queries.map(function (query) {
              return MutationSummary.createQueryValidator(_47.root, query);
            });
          }
          this.observer = MutationObserverCtor
            ? new MutationObserverCtor(function (mutations) {
                _47.observerCallback(mutations);
              })
            : { observe: function () {} };
          this.reconnect();
        }
        MutationSummary.createObserverOptions = function (queries) {
          var observerOptions = { childList: true, subtree: true };
          var attributeFilter;
          function observeAttributes(attributes) {
            if (observerOptions.attributes && !attributeFilter) return;
            observerOptions.attributes = true;
            observerOptions.attributeOldValue = true;
            if (!attributes) {
              attributeFilter = undefined;
              return;
            }
            attributeFilter = attributeFilter || {};
            attributes.forEach(function (attribute) {
              attributeFilter[attribute] = true;
              attributeFilter[attribute.toLowerCase()] = true;
            });
          }
          queries.forEach(function (query) {
            if (query.characterData) {
              observerOptions.characterData = true;
              observerOptions.characterDataOldValue = true;
              return;
            }
            if (query.all) {
              observeAttributes();
              observerOptions.characterData = true;
              observerOptions.characterDataOldValue = true;
              return;
            }
            if (query.attribute) {
              observeAttributes([query.attribute.trim()]);
              return;
            }
            var attributes = elementFilterAttributes(
              query.elementFilter
            ).concat(query.attributeList || []);
            if (attributes.length) observeAttributes(attributes);
          });
          if (attributeFilter)
            observerOptions.attributeFilter = Object.keys(attributeFilter);
          return observerOptions;
        };
        MutationSummary.validateOptions = function (options) {
          for (var prop in options) {
            if (!(prop in MutationSummary.optionKeys))
              throw Error("Invalid option: " + prop);
          }
          if (typeof options.callback !== "function")
            throw Error(
              "Invalid options: callback is required and must be a function"
            );
          if (!options.queries || !options.queries.length)
            throw Error(
              "Invalid options: queries must contain at least one query request object."
            );
          var opts = {
            callback: options.callback,
            rootNode: options.rootNode || _11,
            observeOwnChanges: !!options.observeOwnChanges,
            oldPreviousSibling: !!options.oldPreviousSibling,
            queries: [],
          };
          for (var i = 0; i < options.queries.length; i++) {
            var request = options.queries[i];
            if (request.all) {
              if (Object.keys(request).length > 1)
                throw Error("Invalid request option. all has no options.");
              opts.queries.push({ all: true });
              continue;
            }
            if ("attribute" in request) {
              var query = { attribute: validateAttribute(request.attribute) };
              query.elementFilter = Selector.parseSelectors(
                "*[" + query.attribute + "]"
              );
              if (Object.keys(request).length > 1)
                throw Error(
                  "Invalid request option. attribute has no options."
                );
              opts.queries.push(query);
              continue;
            }
            if ("element" in request) {
              var requestOptionCount = Object.keys(request).length;
              var query = {
                element: request.element,
                elementFilter: Selector.parseSelectors(request.element),
              };
              if (request.hasOwnProperty("elementAttributes")) {
                query.attributeList = validateElementAttributes(
                  request.elementAttributes
                );
                requestOptionCount--;
              }
              if (requestOptionCount > 1)
                throw Error(
                  "Invalid request option. element only allows elementAttributes option."
                );
              opts.queries.push(query);
              continue;
            }
            if (request.characterData) {
              if (Object.keys(request).length > 1)
                throw Error(
                  "Invalid request option. characterData has no options."
                );
              opts.queries.push({ characterData: true });
              continue;
            }
            throw Error("Invalid request option. Unknown query request.");
          }
          return opts;
        };
        MutationSummary.prototype.createSummaries = function (mutations) {
          if (!mutations || !mutations.length) return [];
          var projection = new MutationProjection(
            this.root,
            mutations,
            this.elementFilter,
            this.calcReordered,
            this.options.oldPreviousSibling
          );
          var summaries = [];
          for (var i = 0; i < this.options.queries.length; i++) {
            summaries.push(new Summary(projection, this.options.queries[i]));
          }
          return summaries;
        };
        MutationSummary.prototype.checkpointQueryValidators = function () {
          this.queryValidators.forEach(function (validator) {
            if (validator) validator.recordPreviousState();
          });
        };
        MutationSummary.prototype.runQueryValidators = function (summaries) {
          this.queryValidators.forEach(function (validator, index) {
            if (validator) validator.validate(summaries[index]);
          });
        };
        MutationSummary.prototype.changesToReport = function (summaries) {
          return summaries.some(function (summary) {
            var summaryProps = [
              "added",
              "removed",
              "reordered",
              "reparented",
              "valueChanged",
              "characterDataChanged",
            ];
            if (
              summaryProps.some(function (prop) {
                return summary[prop] && summary[prop].length;
              })
            )
              return true;
            if (summary.attributeChanged) {
              var attrNames = Object.keys(summary.attributeChanged);
              var attrsChanged = attrNames.some(function (attrName) {
                return !!summary.attributeChanged[attrName].length;
              });
              if (attrsChanged) return true;
            }
            return false;
          });
        };
        MutationSummary.prototype.observerCallback = function (mutations) {
          if (!this.options.observeOwnChanges) this.observer.disconnect();
          var summaries = this.createSummaries(mutations);
          this.runQueryValidators(summaries);
          if (this.options.observeOwnChanges) this.checkpointQueryValidators();
          if (this.changesToReport(summaries)) this.callback(summaries);
          if (!this.options.observeOwnChanges && this.connected) {
            this.checkpointQueryValidators();
            this.observer.observe(this.root, this.observerOptions);
          }
        };
        MutationSummary.prototype.reconnect = function () {
          if (this.connected) throw Error("Already connected");
          this.observer.observe(this.root, this.observerOptions);
          this.connected = true;
          this.checkpointQueryValidators();
        };
        MutationSummary.prototype.takeSummaries = function () {
          if (!this.connected) throw Error("Not connected");
          var summaries = this.createSummaries(this.observer.takeRecords());
          return this.changesToReport(summaries) ? summaries : undefined;
        };
        MutationSummary.prototype.disconnect = function () {
          var summaries = this.takeSummaries();
          this.observer.disconnect();
          this.connected = false;
          return summaries;
        };
        MutationSummary.NodeMap = NodeMap;
        MutationSummary.parseElementFilter = Selector.parseSelectors;
        MutationSummary.optionKeys = {
          callback: true,
          queries: true,
          rootNode: true,
          oldPreviousSibling: true,
          observeOwnChanges: true,
        };
        return MutationSummary;
      })();
      var TreeMirrorClient = (function () {
        function TreeMirrorClient(target, mirror, testingQueries) {
          var _47 = this;
          this.target = target;
          this.mirror = mirror;
          this.nextId = 1;
          this.knownNodes = new MutationSummary.NodeMap();
          _312();
          _323();
          var rootId = this.serializeNode(target).id;
          var children = [];
          for (
            var child = target.firstChild;
            child;
            child = child.nextSibling
          ) {
            var serializedChild = this.serializeNode(child, true);
            if (serializedChild) children.push(serializedChild);
          }
          this.mirror.initialize(rootId, children);
          var self = this;
          var queries = [{ all: true }];
          if (testingQueries) queries = queries.concat(testingQueries);
          this.mutationSummary = new MutationSummary({
            rootNode: target,
            callback: function (summaries) {
              _47.applyChanged(summaries);
            },
            queries: queries,
          });
        }
        TreeMirrorClient.prototype.disconnect = function () {
          if (this.mutationSummary) {
            this.mutationSummary.disconnect();
            this.mutationSummary = undefined;
          }
        };
        TreeMirrorClient.prototype.rememberNode = function (node) {
          var id = this.nextId++;
          this.knownNodes.set(node, id);
          return id;
        };
        TreeMirrorClient.prototype.forgetNode = function (node) {
          this.knownNodes.deleteNode(node);
        };
        TreeMirrorClient.prototype.isKnownNode = function (node) {
          return !!this.knownNodes.get(node);
        };
        TreeMirrorClient.prototype.serializeNode = function (node, isInitial) {
          if (node === null || _192(node, "no-mouseflow-dom")) return null;
          if (_192(node, _274)) return null;
          var id = this.knownNodes.get(node);
          if (id !== undefined) {
            if (isInitial)
              return _10(
                "Found duplicated node during initial DOM: " + id,
                _14()
              );
            return { id: id };
          }
          var data = { nodeType: node.nodeType, id: this.rememberNode(node) };
          if (node.shadowRoot) data.shadow = node.shadowRoot.innerHTML;
          if (
            _9._144(node, "data-mf-replace") ||
            _9._144(node, "data-mf-replace-inner")
          )
            return null;
          var _602 = _468(node),
            _585 = !!_192(node.parentNode, _274);
          if (_602 || _585) {
            _10(
              "CSS Blacklist blocked node. NodeType: " +
                node.nodeType +
                ". " +
                (node.nodeType === 1 ? "Tag: " + node.tagName : ""),
              _14()
            );
            _199(node, _274, true);
            if (isInitial && node.childNodes.length) {
              var _82;
              for (_82 = node.firstChild; _82; _82 = _82.nextSibling)
                this.serializeNode(_82, true);
            }
            if (_585) return null;
          }
          if (isInitial) {
            if (
              _192(node.parentNode, "no-mouseflow-dom") ||
              _9._124(node, "no-mouseflow-dom")
            )
              _199(node, "no-mouseflow-dom", "initial");
          } else if (_192(node.parentNode, "no-mouseflow-dom")) {
            _199(node, "no-mouseflow-dom", "inherit");
            return null;
          }
          switch (data.nodeType) {
            case 10:
              data.name = node.name;
              data.publicId = node.publicId;
              data.systemId = node.systemId;
              break;
            case 8:
            case 3:
              if (
                node.nodeType === 8 &&
                node.textContent.indexOf("[if") !== 0 &&
                node.textContent.indexOf("<![endif]") !== 0
              )
                break;
              data.textContent = _435(node).replace(_669, " ");
              if (
                node.parentNode &&
                node.parentNode.tagName === "STYLE" &&
                /^\s*$/.test(node.textContent)
              ) {
                data.textContent = _310(node.parentNode);
              }
              break;
            case 1:
              if (
                node.tagName === "IFRAME" &&
                node.parentNode &&
                node.parentNode.tagName === "HEAD"
              ) {
                data.nodeType = 8;
                data.textContent = "";
                break;
              }
              data.tagName = node.tagName;
              if (node.attributes["data-mf-replace"]) {
                var _230 = node.attributes["data-mf-replace"].value;
                data = _571.call(this, _230, function (_29) {
                  var _15 = this.serializeNode(_29, true);
                  _15.id = data.id;
                  this.knownNodes.set(_29, _15.id);
                  return _15;
                })[0];
                break;
              }
              if (node.tagName === "SCRIPT") {
                if (/\/?aura_prod\.js(\?.+)?$/.test(node.src)) {
                  _10("Salesforce Aura script added");
                  _823();
                  _838();
                }
                break;
              }
              data.attributes = {};
              if (_602) {
                var _591 = _562(node);
                if (node.id) data.attributes.id = node.id;
                if (node.name) data.attributes.name = node.name;
                data.attributes.style =
                  (node.style ? node.style.cssText + "; " : "") +
                  "width: " +
                  _591.width +
                  "px; height: " +
                  _591.height +
                  "px;" +
                  (_2.getComputedStyle(node).display === "inline"
                    ? " display: inline-block;"
                    : "");
                data.attributes.class = node.className + " mf-excluded";
                break;
              }
              for (var i = 0; i < node.attributes.length; i++) {
                var attr = node.attributes[i];
                if (_722(attr.name.toLowerCase())) continue;
                if (
                  attr.name.toLowerCase() === "value" &&
                  node.tagName === "INPUT"
                )
                  data.attributes.value = _198(node);
                else data.attributes[attr.name] = attr.value;
              }
              if (
                node.tagName === "IFRAME" &&
                node.offsetWidth <= 1 &&
                node.offsetHeight <= 1
              )
                data.attributes.src = "";
              if (isInitial && node.tagName === "INPUT") {
                if (!data.attributes.value && node.value)
                  data.attributes.value = _198(node);
                if (!data.attributes.checked && node.checked)
                  data.attributes.checked = node.checked;
              }
              if (
                isInitial &&
                node.tagName === "OPTION" &&
                !data.attributes.selected &&
                node.selected
              )
                data.attributes.selected = node.selected;
              if (
                node.tagName === "INPUT" &&
                node.type === "hidden" &&
                data.attributes.value
              )
                data.attributes.value = "";
              if (node.attributes["data-mf-replace-inner"]) {
                var _230 = node.attributes["data-mf-replace-inner"].value;
                data.childNodes = _571.call(this, _230, function (_29) {
                  return this.serializeNode(_29, true);
                });
                break;
              }
              if (isInitial) {
                if (node.childNodes.length) {
                  data.childNodes = [];
                  var _167 = false;
                  for (
                    var child = node.firstChild;
                    child;
                    child = child.nextSibling
                  ) {
                    if (_539(child)) _167 = true;
                    else if (_540(child.previousSibling)) _167 = false;
                    if (_167) continue;
                    var serializedChild = this.serializeNode(child, true);
                    if (serializedChild) {
                      data.childNodes.push(serializedChild);
                    }
                  }
                }
                var _294 =
                  node.tagName === "LINK" &&
                  node.href &&
                  (node.href.indexOf("blob:") === 0 || _7.enableCssRecording);
                if (_294) {
                  try {
                    var _ = node.sheet.cssRules;
                  } catch (e) {
                    _294 = false;
                  }
                }
                var _640 = node.tagName === "STYLE" && !node.textContent;
                if (_294) {
                  data.tagName = "STYLE";
                  data.href = undefined;
                  data.rel = undefined;
                }
                if (_294 || _640) {
                  data.childNodes = [{ nodeType: 3, textContent: _310(node) }];
                }
              }
              break;
          }
          return data;
        };
        TreeMirrorClient.prototype.serializeAddedAndMoved = function (
          added,
          reparented,
          reordered
        ) {
          var _47 = this;
          var all = added.concat(reparented).concat(reordered);
          var parentMap = new MutationSummary.NodeMap();
          all.forEach(function (node) {
            var parent = node.parentNode;
            var children = parentMap.get(parent);
            if (!children) {
              children = new MutationSummary.NodeMap();
              parentMap.set(parent, children);
            }
            children.set(node, true);
          });
          var moved = [];
          var noMouseflowDom = [];
          parentMap.keys().forEach(function (parent) {
            var children = parentMap.get(parent);
            var keys = children.keys();
            while (keys.length) {
              var node = keys[0];
              while (node.previousSibling && children.has(node.previousSibling))
                node = node.previousSibling;
              var _167 = false;
              while (node && children.has(node)) {
                if (_539(node)) _167 = true;
                else if (_540(node.previousSibling)) _167 = false;
                if (!_167) {
                  var data = _47.serializeNode(node);
                  if (data) {
                    var _287 = node.previousSibling;
                    while (_287 && !data.previousSibling) {
                      data.previousSibling = _47.serializeNode(_287);
                      _287 = _287.previousSibling;
                    }
                    data.parentNode = _47.serializeNode(node.parentNode);
                    if (data.parentNode) moved.push(data);
                  }
                  if (_9._124(node, "no-mouseflow-dom"))
                    noMouseflowDom.push(node);
                }
                children.deleteNode(node);
                node = node.nextSibling;
              }
              var keys = children.keys();
            }
          });
          noMouseflowDom.forEach(function (node) {
            _199(node, "no-mouseflow-dom", "initial", true);
          });
          return moved;
        };
        TreeMirrorClient.prototype.serializeAttributeChanges = function (
          attributeChanged
        ) {
          var _47 = this;
          var map = new MutationSummary.NodeMap();
          Object.keys(attributeChanged).forEach(function (attrName) {
            attributeChanged[attrName].forEach(function (element) {
              if (
                element.hasAttribute("data-mf-replace") ||
                _9._144(element, "data-mf-replace") ||
                _9._144(element, "data-mf-replace-inner")
              ) {
                return;
              }
              if (_9._124(element, "no-mouseflow-dom"))
                _199(element, "no-mouseflow-dom", "initial", true);
              var record = map.get(element);
              if (!record) {
                record = _47.serializeNode(element);
                if (record) {
                  record.attributes = {};
                  map.set(element, record);
                }
              }
              if (record) {
                if (
                  attrName.toLowerCase() === "value" &&
                  element.tagName === "INPUT"
                )
                  record.attributes.value = _198(element);
                else
                  record.attributes[attrName] = element.getAttribute(attrName);
              }
            });
          });
          return map.keys().map(function (node) {
            return map.get(node);
          });
        };
        TreeMirrorClient.prototype.serializeTextChanges = function (
          textChanges
        ) {
          var _47 = this;
          return textChanges.map(function (node) {
            var data = _47.serializeNode(node);
            if (data) {
              if (node.shadowRoot) data.shadow = node.shadowRoot.innerHTML;
              else if (
                node.tagName === "STYLE" &&
                /^\s*$/.test(node.textContent)
              )
                data.textContent = _310(node);
              else data.textContent = _435(node);
            }
            return data;
          });
        };
        TreeMirrorClient.prototype.applyChanged = function (summaries) {
          _312();
          _323();
          var summary = summaries[0];
          [
            "removed",
            "added",
            "reparented",
            "reordered",
            "attributeChanged",
            "characterDataChanged",
          ].forEach(function (key) {
            if (!summary[key]) summary[key] = [];
          });
          var _47 = this;
          var removed = summary.removed.map(function (node) {
            return _47.serializeNode(node);
          });
          var moved = this.serializeAddedAndMoved(
            summary.added,
            summary.reparented,
            summary.reordered
          );
          var attributes = this.serializeAttributeChanges(
            summary.attributeChanged
          );
          var text = this.serializeTextChanges(summary.characterDataChanged);
          this.mirror.applyChanged({
            removed: _280(removed),
            addedOrMoved: _280(moved),
            attributes: _280(attributes),
            text: _280(text),
          });
          summary.removed.forEach(function (node) {
            _47.forgetNode(node);
          });
        };
        return TreeMirrorClient;
      })();
      function _280(_707) {
        return _707.filter(function (_153) {
          return _153;
        });
      }
      function _312() {
        _320 = [];
        if (!_7._229.length) return;
        try {
          var _227 = _11.querySelectorAll(_7._229.join(","));
          for (var i = 0; i < _227.length; i++) {
            _320.push(_227[i]);
          }
        } catch (e) {}
      }
      function _323() {
        _322 = [];
        if (!_7._228.length) return;
        try {
          var _227 = _11.querySelectorAll(_7._228.join(","));
          for (var i = 0; i < _227.length; i++) {
            _322.push(_227[i]);
          }
        } catch (e) {}
      }
      function _571(_230, _715) {
        var _15 = [];
        var _316 = _11.createElement("div");
        _316.innerHTML = _230;
        for (var i = 0; i < _316.childNodes.length; i++) {
          var _718 = _316.childNodes[i];
          var _720 = _715.call(this, _718);
          _15.push(_720);
        }
        return _15;
      }
      function _539(_29) {
        return (
          _29 &&
          _29.nodeType === 8 &&
          _29.textContent
            .trim()
            .toLowerCase()
            .indexOf("mouseflowexcludestart") === 0
        );
      }
      function _540(_29) {
        return (
          _29 &&
          _29.nodeType === 8 &&
          _29.textContent
            .trim()
            .toLowerCase()
            .indexOf("mouseflowexcludeend") === 0
        );
      }
      function _722(_390) {
        return _723.test(_390);
      }
      function _310(_29) {
        var _241 = "";
        if (!_29.sheet || !_29.sheet.cssRules) return _241;
        for (var _1 = 0; _1 < _29.sheet.cssRules.length; _1++) {
          _241 += _29.sheet.cssRules[_1].cssText;
        }
        return _241;
      }
      function _795() {
        _99({
          _17: _130 + "install?websiteId=" + _7._43,
          _148: function () {
            _10("Website installed signal sent.", _14());
          },
          _76: function () {
            _10(
              "Error in transmitCrossDomain - could not signal that website was installed.",
              _14()
            );
          },
        });
      }
      function _786(_141) {
        _99({
          _17: _130 + "config?websiteId=" + _7._43,
          _148: function (_65) {
            var _726 = _9._146(_65._364);
            _7.keyLogging = _726.enableKeystrokes;
            _10("Fetched recording script configuration.");
            _141();
          },
          _76: function () {
            _10(
              "Error in transmitCrossDomain - could not fetch recording script configuration."
            );
            _141();
          },
        });
      }
      function _42() {
        if (_75) {
          _10("Recording script is already started", _14());
          return;
        }
        if (!_590) {
          _10(
            "Recording not started - recording script is not initialized",
            _14()
          );
          return;
        }
        _10(
          "Recording starting, version " +
            _219 +
            (_7.gdprEnabled ? ", GDPR mode enabled." : ""),
          _14()
        );
        if (!_496()) return;
        _75 = true;
        _664();
        _312();
        _323();
        _12._77 = _845(_0._502);
        if (_689()) _691();
        _0._269 = _219;
        _680();
      }
      function _680() {
        var _551 = _793();
        var _17 =
          _130 +
          "init?v=" +
          _219 +
          "&p=" +
          _7._43 +
          "&s=" +
          _12._51 +
          "&page=" +
          _12._77 +
          "&ret=" +
          (_12._220 ? "1" : "0") +
          "&u=" +
          _12._149 +
          "&href={href}" +
          "&url=" +
          _67(_170._234()) +
          "&ref={referrer}" +
          "&title=" +
          _67(_11.title) +
          "&res=" +
          _2.screen.width +
          "x" +
          _2.screen.height +
          "&tz=" +
          _847() +
          "&to=" +
          _12._493 +
          "&dnt=" +
          _12._604 +
          "&ori=" +
          (typeof _2.orientation != "undefined" ? _2.orientation : "") +
          "&dw=" +
          _11.documentElement.clientWidth +
          "&dh=" +
          _11.documentElement.clientHeight +
          "&time=" +
          _866() +
          "&pxr=" +
          (typeof _2.devicePixelRatio != "undefined"
            ? _2.devicePixelRatio
            : 1) +
          (_551.length > 0 ? "&fw=" + _551.join(",") : "") +
          "&gdpr=" +
          (_7.gdprEnabled ? 1 : 0);
        var _173 = _7.location.href;
        var _554 = _56._259 - _17.length - 6;
        if (_67(_173).length > _554) _173 = _173.split("#")[0];
        if (_67(_173).length > _554) _173 = _173.split("?")[0];
        _17 = _17.replace("{href}", _67(_173));
        var _175 = _11.referrer;
        if (_17.replace("{referrer}", _67(_175)).length > _56._259) {
          if (_175.indexOf("?") > -1) _175 = _175.split("?")[0];
          if (_17.replace("{referrer}", _67(_175)).length > _56._259) _175 = "";
        }
        _17 = _17.replace("{referrer}", _67(_175));
        _792();
        var _556 = _703(_56._259 - _17.length - 6);
        _17 += _721(_556);
        _99({
          _17: _17,
          _148: function (_65) {
            if (_65._364 === "Recording blocked") {
              _10("Recording not started - mf_block cookie set to 1", _14());
              return;
            }
            _556.forEach(function (_113) {
              _579(_113.key, _113.value);
            });
            _182 = true;
            _694();
            _125._42(_12, _0, _362, _98, _544, _405, _10);
            _2._mfq = new _557(_2._mfq);
            _659();
            _658();
          },
          _733: true,
          _76: function () {
            _10(
              "Error in transmitCrossDomain - recording not starting.",
              _14()
            );
          },
        });
        if (_0._236) {
          if (_0._236 !== _119(_7.path || _7.location.pathname)) _405();
          _0._236 = null;
        }
        _848();
        _0._80 = { x: _2.pageXOffset, y: _2.pageYOffset };
        if (_0._80.x !== 0 && _0._80.y !== 0) _458();
        _0._203 = 1;
        _329();
        _10(
          "Recording started. Session: " +
            _12._51 +
            ", Page: " +
            _12._77 +
            ", Last page: " +
            _12._350,
          _14()
        );
      }
      function _689() {
        return (
          !_12._51 ||
          !_843() ||
          _0._269 !== _219 ||
          +new Date() - _0._292 > _56._347
        );
      }
      function _691() {
        _10("Starting new session");
        var _697 = _12._51;
        _12._51 = _324();
        _0._131 = [];
        _12._210 = 0;
        if (_12._51 === _697)
          throw Error(
            "New session ID is identical to the old session ID. This might be because Math.random has been overwritten."
          );
      }
      function _64(_711) {
        if (!_75) return;
        _309 = false;
        _450();
        _603();
        _23._152(_352);
        _23._152(_354);
        _23._152(_355);
        _23._112(_214);
        if (_208) {
          _23._112(_208);
          _626();
        }
        if (_237) {
          _23._112(_237);
          _619();
        }
        _667();
        if (!_711) _25(_5._696, {});
        _256();
        _182 = false;
        try {
          _134.disconnect();
        } catch (e) {}
        _125._64();
        _329();
        _0 = _447();
        _10("Recording stopped", _14());
        _75 = false;
        _325 = false;
      }
      function _781(_28, _88) {
        if (typeof _28 !== "string") _28 = (_28 || "").toString();
        if (_75) {
          if (!_309) {
            _10(
              "New page view skipped. Current page view is not initialized yet.",
              _14()
            );
            return;
          }
          _64();
        }
        _7.htmlDelay = _7.newPageViewHtmlDelay;
        if (typeof _28 != "undefined") _7.path = _28;
        if (_88) _7.location = _88;
        _42();
        _385(0);
      }
      function _780() {
        _64();
        _814("mf_" + _7._43);
        if (
          _2.name &&
          ((_2.name.length === 35 && _2.name.indexOf("mf_") === 0) ||
            (_7.crossDomainSupport && _2.name.indexOf("mf_" + _7._43) === 0))
        )
          _2.name = "";
      }
      function _694() {
        if (_7.htmlFetchMode === "post") {
          _23._53(function () {
            _693();
          }, _7.htmlDelay);
        } else {
          _10("Html not sent due to mouseflowHtmlFecthMode setting", _14());
        }
      }
      function _693() {
        _134 = new TreeMirrorClient(_11, {
          initialize: function (rootId, children) {
            _309 = true;
            _738(
              { data: { f: "initialize", args: [rootId, children] } },
              _11.documentElement.innerHTML.length
            );
          },
          applyChanged: function (summary) {
            if (_14() - _0._371 < 30000) {
              if (
                summary.removed.length ||
                summary.addedOrMoved.length ||
                summary.attributes.length ||
                summary.text.length
              ) {
                _740({
                  data: {
                    f: "applyChanged",
                    args: [
                      summary.removed,
                      summary.addedOrMoved,
                      summary.attributes,
                      summary.text,
                    ],
                  },
                });
              }
            }
          },
        });
      }
      function _798(_26, _4, _684, _613) {
        if (!_75 || !_26) return;
        _4 = _4 || "";
        if (!_579(_26, _4)) {
          _10(
            "Variable already set to same value, not triggering callback.",
            _14()
          );
          return;
        }
        var _15 = {
          key: _26.toString(),
          value: _4.toString() || "",
          scope: _684 || "session",
          overwrite: _613 === undefined ? true : _613,
        };
        _0._111.push(_15);
        _23._112(_237);
        _237 = _23._53(_619, 1000);
      }
      function _703(limit) {
        if (!_2._mfq.length) return [];
        var _111 = [];
        var _616 = 0;
        for (var _50 = 0; _50 < _2._mfq.length; _50++) {
          var _46 = _2._mfq[_50];
          if (!_46 || !_46.length || _46[0] !== "setVariable") continue;
          if (
            (_46.length > 3 && _46[3] !== "session") ||
            (_46.length > 4 && _46[4] !== true)
          )
            continue;
          var _26 = _46[1];
          var _4 = _46[2];
          if (!_26 || !_4) continue;
          if (_578(_26) !== -1) continue;
          var _705 = _67(_26) + "=" + _67(_4);
          _616 += _705.length + 1;
          if (_616 - 1 >= limit) break;
          _111.push({ key: _26, value: _4 });
          _2._mfq.splice(_50, 1);
          _50--;
        }
        return _111;
      }
      function _721(_111) {
        var _618 = _111
          .map(function (_113) {
            return _67(_113.key) + "=" + _67(_113.value);
          })
          .join("&");
        return _618 ? "&vars=" + _67(_618) : "";
      }
      function _619() {
        _237 = 0;
        for (var _1 = 0; _1 < _0._111.length; _1++) {
          var _113 = _0._111[_1];
          _10(
            "Setting custom variable: " +
              _113.key +
              " = " +
              _113.value +
              ", overwrite: " +
              (_113.overwrite === undefined ? true : _113.overwrite),
            _14()
          );
        }
        _362("variable", _0._111);
        _0._111 = [];
      }
      function _98(_647) {
        _25(_5._98, { target: _647 });
      }
      function _807() {
        _25(_5._98, { target: "*" });
      }
      function _815(_643) {
        if (_7.gdprEnabled)
          _10("User identification not allowed (script in GDPR mode)", _14());
        else if (!_75) _362("identify", { userId: _12._149, userName: _643 });
      }
      function _544(_36) {
        if (!_75) return;
        _10("Registering form submit attempt on this page", _14());
        _494(_36);
      }
      function _405(_36) {
        if (!_75) return;
        var _314 = _14();
        if (_0._137 || _314 > 5000) {
          _10("Registering form submit success on this page", _14());
          if (!_0._137) _25(_5._290, { target: _36 });
          _25(_5._617, {});
          _0._137 = undefined;
        } else {
          _10("Registering form submit success on previous page", _14());
          _349([{ _20: _5._617 }]);
        }
      }
      function _810(_36) {
        if (!_75) return;
        var _314 = _14();
        if (_0._137 || _314 > 5000) {
          _10("Registering form submit failure on this page", _14());
          if (!_0._137) _25(_5._290, { target: _36 });
          _25(_5._179, {});
          _147(_91._179);
          _0._137 = undefined;
        } else {
          _10("Registering form submit failure on previous page", _14());
          _349([
            { _20: _5._179 },
            { _20: _5._92, _22: { x: _91._179._4, y: 0 } },
            { _20: _5._98, _22: { target: _91._179._19 } },
          ]);
        }
      }
      function _494(_36) {
        if (!_75 || !_36 || _277(_358(_36))) return;
        if (+new Date() - _0._449 < 20) return;
        _0._449 = +new Date();
        _25(_5._290, { target: _36 });
        if (!_0._327[_36]) {
          _0._327[_36] = _357(_36);
        } else {
          _724(_36, _357(_36), _0._327[_36]);
        }
        _719(_36);
        _651(_36);
        _0._137 = +new Date();
      }
      function _147(_92, _44) {
        if (!_75 || !_92) return;
        var _4 = +_92._4;
        if (!_4) return;
        var _19 = _92._19;
        if (_19) {
          if (_0._451.indexOf(_19) !== -1) return;
          _0._451.push(_19);
        } else {
          _19 = "custom-friction" + (_92._552 ? "-" + _92._552 : "");
        }
        var _670 = {
          value: _19,
          target: _44 ? _44 : "",
          x: _4 > 0 ? _4 : 0,
          y: _4 < 0 ? _4 * -1 : 0,
        };
        _25(_5._92, _670);
      }
      function _659() {
        if (_12._87.length < 2) return;
        var _185 = _12._87[_12._87.length - 2];
        var _247 = _12._87[_12._87.length - 1];
        var _174 = _119(_7.path || _7.location.pathname);
        if (
          _185._174 === _174 &&
          _185._174 !== _247._174 &&
          _0._81 - _247._81 < 10000
        ) {
          _349([
            { _20: _5._92, _22: { x: _91._627._4, y: 0 } },
            { _20: _5._98, _22: { target: _91._627._19 } },
          ]);
        }
      }
      function _658() {
        if (_12._87.length < 4) return;
        var _633 = _12._87[_12._87.length - 5];
        var _185 = _12._87[_12._87.length - 4];
        if (_0._81 - _185._81 < 30000) {
          if (_633 && _185._81 - _633._81 < 30000) return;
          _509(_185._48, [
            { _20: _5._92, _22: { x: _91._536._4, y: 0 } },
            { _20: _5._98, _22: { target: _91._536._19 } },
          ]);
        }
      }
      function _393() {
        if (!_75) return;
        _125._393.apply(_125, arguments);
      }
      function _662() {
        return {
          _51: "",
          _77: "",
          _149: "",
          _220: false,
          _493: +("ontouchstart" in _2 && _7.touchEvents),
          _604:
            navigator.doNotTrack === "yes" ||
            navigator.doNotTrack == 1 ||
            window.doNotTrack == 1 ||
            navigator.msDoNotTrack == 1
              ? 1
              : 0,
          _210: 0,
          _350: "",
          _87: [],
          _248: [],
          _263: _661(),
          _133: null,
        };
      }
      function _661() {
        try {
          _2.sessionStorage.setItem("mf_supportsSessionStorage", "1");
          var _660 =
            _2.sessionStorage.getItem("mf_supportsSessionStorage") === "1";
          _2.sessionStorage.removeItem("mf_supportsSessionStorage");
          return _660;
        } catch (e) {
          return false;
        }
      }
      function _447() {
        return {
          _502: new Date(),
          _81: +new Date(),
          _218: +new Date(),
          _292: +new Date(),
          _15: [],
          _204: [],
          _37: [],
          _240: [],
          _527: [],
          _138: [],
          _120: [],
          _519: 0,
          _504: 0,
          _161: 0,
          _533: "",
          _449: 0,
          _238: [],
          _168: [],
          _235: [],
          _451: [],
          _114: { x: 0, y: 0 },
          _456: { x: 0, y: 0 },
          _455: { x: 0, y: 0 },
          _491: -100,
          _80: { x: 0, y: 0 },
          _205: { x: 0, y: 0 },
          _176: {},
          _334: -100,
          _335: -100,
          _135: { x: 0, y: 0 },
          _359: [],
          _742: 0,
          _151: [],
          _111: [],
          _203: 1,
          _371: 0,
          _512: 0,
          _327: {},
          _131: [],
          _445: 0,
          _444: 0,
          _510: 0,
          _248: [],
          _225: 0,
          _224: 0,
          _129: null,
          _110: _649(),
          _608: 0,
          _369: false,
          _269: 0,
          _473: false,
          _479: false,
        };
      }
      function _357(_36) {
        var _155 = _358(_36);
        var _32 = {};
        if (!_155) {
          _10("Form not found: " + _36, _14());
          return _32;
        }
        for (var i = 0; i < _155.elements.length; i++) {
          var _6 = _155.elements[i];
          var _19 = _6.name;
          if (!_19 || _19 == "") continue;
          if (
            _6.tagName &&
            /input|select|button|textarea/.test(_6.tagName.toLowerCase()) &&
            (!_6.type ||
              !/hidden|submit|reset|image|button/.test(_6.type.toLowerCase()))
          ) {
            var _4 = _232(_6);
            if (!_32[_19]) _32[_19] = _4;
            else if (_4 && _4 != "") _32[_19] += ", " + _4;
          }
        }
        return _32;
      }
      function _651(_36) {
        var _155 = _358(_36);
        if (!_155 || !_12._263) return;
        var _1, _52;
        for (_1 = 0; _1 < _155.elements.length; _1++) {
          var _6 = _155.elements[_1];
          if (
            _6.tagName &&
            /input|textarea/.test(_6.tagName.toLowerCase()) &&
            (!_6.type ||
              !/hidden|submit|reset|image|file|button|password/.test(
                _6.type.toLowerCase()
              ))
          ) {
            var _4 = _232(_6);
            if (!_4 || _4.length <= 3 || _511(_6) || _319(_6)) continue;
            var _93 = _457(_4);
            if (_93.length === 0) continue;
            var _158 = [];
            for (_52 = 0; _52 < _93.length; _52++) {
              _158.push(_93[_52]._169);
            }
            var _156 = false;
            for (_52 = 0; _52 < _0._110.length; _52++) {
              var _233 = _0._110[_52];
              _156 = _158.length === _233.length && _463(_233, _158) === 0;
              if (_156) break;
            }
            if (!_156) _0._110.push(_158);
          }
        }
        if (_0._110.length) {
          _0._110 = _0._110.slice(-100);
          _648(_0._110);
        }
      }
      function _648(_37) {
        try {
          _2.localStorage.setItem("mf_replaceHashes", _9._69(_37));
        } catch (e) {}
      }
      function _649() {
        try {
          return _9._146(_2.localStorage.getItem("mf_replaceHashes")) || [];
        } catch (e) {
          return [];
        }
      }
      function _692(_4) {
        if (_0._110.length === 0) return _4;
        var _93 = _457(_4);
        for (var _1 = 0; _1 < _0._110.length; _1++) {
          var _233 = _0._110[_1];
          var _157;
          do {
            var _107 = _157 !== undefined ? _157 + 1 : 0;
            _157 = _463(_93, _233, _107);
            if (_157 !== -1) {
              var _42 = _93[_157]._42;
              var _187 = _93[_157 + _233.length - 1]._187;
              var _679 = _788("*", _187 - _42);
              _4 = _4.slice(0, _42) + _679 + _4.slice(_187);
            }
          } while (_157 !== -1);
        }
        return _4;
      }
      function _457(_4) {
        var _158 = [];
        var _42;
        function _461(_187) {
          if (_42 === undefined) return;
          var _441 = _4.slice(_42, _187);
          _158.push({ _42: _42, _187: _42 + _441.length, _169: _119(_441) });
          _42 = undefined;
        }
        for (var _1 = 0; _1 < _4.length; _1++) {
          var _421 = _4[_1];
          if (_791(_421)) {
            if (_42 === undefined) {
              _42 = _1;
            }
          } else {
            _461(_1);
          }
        }
        _461();
        return _158;
      }
      function _463(_186, _93, _107) {
        for (var _1 = _107 || 0; _1 < _186.length; _1++) {
          if (_1 + _93.length > _186.length) break;
          if (_728(_186, _93, _1)) return _1;
        }
        return -1;
      }
      function _728(_186, _93, _107) {
        var _156 = false;
        for (
          var _1 = _107 || 0, _52 = 0;
          _1 < _186.length && _52 < _93.length;
          _1++, _52++
        ) {
          _156 = _186[_1]._169 === _93[_52];
          if (!_156) break;
        }
        return _156;
      }
      function _232(_3) {
        var _4 = "";
        if (_3.type && /radio|checkbox/.test(_3.type.toLowerCase()))
          _4 = _3.checked ? _3.value : "";
        else if (
          _3.tagName &&
          /select/.test(_3.tagName.toLowerCase()) &&
          _3.options
        )
          for (var j = 0; j < _3.options.length; j++) {
            var _326 = _3.options[j].selected ? _3.options[j].value : "";
            if (_326 && _326 != "") _4 += (_4 && _4 != "" ? "," : "") + _326;
          }
        else _4 = _3.value;
        return _4 || "";
      }
      function _198(_3) {
        if (_3.type === "password") return "*";
        var _4 = _232(_3);
        if (_521(_3)) {
          _4 = _4.replace(/./g, _535(_3.type));
        } else if (_522(_3) && !_319(_3)) {
          _4 = _4.slice(0, 2) + _4.slice(2).replace(/./g, _535(_3.type));
        }
        return _4;
      }
      function _435(_3) {
        var _200 = _3.textContent;
        if (_3.nodeType === 3 && _3.parentNode) _3 = _3.parentNode;
        var _431 = _692(_200);
        if (_431 !== _200 && _7.replaceLastFormValues) _200 = _431;
        if (_698(_3)) _200 = _200.replace(/./g, "*");
        return _200;
      }
      function _319(_3) {
        return _9._124(_3, "mouseflow") || _322.indexOf(_3) !== -1;
      }
      function _277(_3) {
        if (!_3) return false;
        if (_3[NodeMap.ID_PROP]) return !!_192(_3, _274);
        while (_3) {
          if (_468(_3)) return true;
          _3 = _3.parentNode;
        }
        return false;
      }
      function _468(_3) {
        return _320.indexOf(_3) !== -1;
      }
      function _470(_3) {
        return (
          _9._124(_3, "no-mouseflow") ||
          (!_7.keyLogging && !_319(_3)) ||
          _277(_3)
        );
      }
      function _521(_3) {
        return (
          (_470(_3) || _511(_3) || _702(_3)) && _518(_3) && !_699.test(_3.type)
        );
      }
      function _698(_3) {
        return (_3.isContentEditable || _3.tagName === "TEXTAREA") && _470(_3);
      }
      function _702(_3) {
        return _7.gdprEnabled && (_687(_3) || _685(_3));
      }
      function _511(_3) {
        return _3.maxLength === 16 || _368(_3.value);
      }
      function _368(_4) {
        return _688.test(_4);
      }
      function _687(_3) {
        return /email/i.test(_3.type) || _686.test(_3.value);
      }
      function _685(_3) {
        return /tel/i.test(_3.type);
      }
      function _522(_3) {
        return _518(_3) && /^\d{3}[^a-z]*$/i.test(_3.value);
      }
      function _518(_3) {
        return _3.tagName === "INPUT" || _3.tagName === "TEXTAREA";
      }
      function _535(_681) {
        return /number/i.test(_681) ? "0" : "*";
      }
      function _851(_39) {
        return _521(_39.target) || _522(_39.target)
          ? "191"
          : (_39.which && _39.which.toString()) || "";
      }
      function _860(_3) {
        var _528 = _63(_3);
        var _261 = _0._527[_528];
        var _298 = _198(_3);
        var _32 = _298;
        if (_261 && _261.length > 3 && _298.indexOf(_261) === 0)
          _32 = "+||" + _298.substring(_261.length);
        _0._527[_528] = _298;
        return _32;
      }
      function _724(_36, _356, _353) {
        try {
          var _245 = [];
          for (var _55 in _356) {
            if (typeof _353[_55] == "undefined" || _356[_55] != _353[_55])
              _245.push(_55);
          }
          for (var _55 in _353) {
            if (typeof _356[_55] == "undefined" && _245.indexOf(_55) === -1)
              _245.push(_55);
          }
          for (var i = 0; i < _245.length; i++) {
            _25(_5._436, { target: _36 + "||" + _245[i] });
          }
        } catch (_45) {
          _10("Error in _addChangedFieldEvents: " + _45.message, _14());
        }
      }
      function _719(_36) {
        try {
          var _249 = _717(_36);
          for (var i = 0; i < _249.length; i++) {
            _25(_5._437, { target: _36 + "||" + _249[i] });
          }
        } catch (_45) {
          _10("Error in getBlankFields: " + _45.message, _14());
        }
      }
      function _717(_36) {
        var _249 = [];
        var _37 = _357(_36);
        for (var _55 in _37) if (_37[_55] == "") _249.push(_55);
        return _249;
      }
      function _358(_36) {
        for (var j = 0; j < _11.forms.length; j++)
          if (_63(_11.forms[j]) == _36) {
            return _11.forms[j];
          }
        return null;
      }
      function _665() {
        _678();
        _706();
      }
      function _329() {
        _710();
        _499();
      }
      function _678() {
        var _471 = _541("mf_user").split("|");
        for (var _1 = 0; _1 < _471.length; _1++) {
          var _74 = _471[_1];
          switch (_1) {
            case 0:
              _12._149 = _74;
              break;
            case 1:
              _12._248 = _74 !== "" ? _74.split(/[$,]+/) : [];
              break;
          }
        }
        _12._220 = _12._149 !== "";
        if (_12._149 === "" || _12._149 === "1") _12._149 = _324();
        _0._473 = true;
      }
      function _710() {
        if (!_0._473) return;
        _542("mf_user", [_12._149, _12._248.join("$")].join("|"), 1, _313(_88));
      }
      function _706() {
        var _477 = _541("mf_" + _7._43).split("|");
        for (var _1 = 0; _1 < _477.length; _1++) {
          var _74 = _477[_1];
          switch (_1) {
            case 0:
              _12._51 = _74;
              break;
            case 1:
              _12._87 = _650(_74, _12._77);
              break;
            case 2:
              _0._292 = parseInt(_74, 10);
              break;
            case 3:
              _0._131 = _74 !== "" ? _74.split(".") : [];
              break;
            case 4:
              _12._210 = parseInt(_74, 10);
              break;
            case 5:
              _0._236 = _74;
              break;
            case 6:
              _0._248 = _74 !== "" ? _74.split(/[$,]+/) : [];
              break;
            case 7:
              _12._220 = _74 === "1";
              break;
            case 8:
              _0._269 = _74;
              break;
            case 9:
              _12._133 = parseFloat(_74);
              break;
          }
        }
        if (!_12._51) _12._51 = _7.sessionId || _666();
        if (!_12._133) _12._133 = _641();
        var _247 = _12._87[_12._87.length - 1];
        if (_247) _12._350 = _247._48;
        _0._479 = true;
      }
      function _666() {
        var sessionId = _478();
        return sessionId && sessionId.length === 32 ? sessionId : null;
      }
      function _641() {
        var recordingRate = _478();
        return /^\d+\.\d+$/.test(recordingRate)
          ? parseFloat(recordingRate)
          : null;
      }
      function _478() {
        return _7.crossDomainSupport &&
          _2.name &&
          _2.name.indexOf("mf_" + _7._43) === 0
          ? _2.name.split("=")[1]
          : null;
      }
      function _499() {
        if (!_0._479) return;
        _542(
          "mf_" + _7._43,
          [
            _12._51,
            _655(),
            _0._292,
            _0._131.join("."),
            _12._210,
            _0._236 || "",
            _0._248.join("$"),
            _12._220 ? "1" : "0",
            _0._269,
            _12._133,
          ].join("|"),
          0,
          _313(_88)
        );
        if (_7.crossDomainSupport)
          _2.name = "mf_" + _7._43 + "=" + (_12._51 || _12._133);
      }
      function _650(_4, _77) {
        return _4
          .split(/[$,]+/)
          .map(function (_242) {
            var _37 = _242.split(".");
            return { _48: _37[0], _174: _37[1], _81: +_37[2] };
          })
          .filter(function (p) {
            return p._48 !== _77;
          })
          .slice(-5);
      }
      function _655() {
        return _12._87
          .concat([
            {
              _48: _12._77,
              _174: _119(_7.path || _7.location.pathname),
              _81: _0._81,
            },
          ])
          .slice(-6)
          .map(function (_242) {
            return _242._48 + "." + _242._174 + "." + _242._81;
          })
          .join("$");
      }
      var _273 = "__mouseflow_properties__";
      var _274 = "is-blacklisted";
      function _192(_29, _26) {
        if (!_29) return null;
        var _195 = _29[_273];
        return _195 ? _195[_26] : null;
      }
      function _199(_29, _26, _4, _675) {
        var _195 = _29[_273];
        if (!_195) _195 = _29[_273] = {};
        _195[_26] = _4;
        if (_675 && _29.childNodes && _29.childNodes.length) {
          for (var _82 = _29.firstChild; _82; _82 = _82.nextSibling) {
            _199(_82, _26, _4, true);
          }
        }
      }
      function _489(_29) {
        delete _29[_273];
        if (_29.childNodes && _29.childNodes.length) {
          for (var _82 = _29.firstChild; _82; _82 = _82.nextSibling) {
            _489(_82);
          }
        }
      }
      function _667() {
        _489(_2.document.body);
      }
      function _664() {
        _0._81 = +new Date();
        _0._218 = +new Date();
        _352 = _23._257(_458, _56._492);
        _354 = _23._257(_759, _56._663);
        _355 = _23._257(_315, _56._656);
        _214 = _23._53(_566, _56._347);
      }
      function _783() {
        if (!_574(_7.location.hostname)) return false;
        if (_594()) {
          _10("Recording not started - browser is IE8 or older");
          return false;
        }
        return _496();
      }
      function _496() {
        _665();
        if (_7.forceStart) return true;
        if (_732()) {
          _10("Recording not started - session ID is invalid.", _14());
          return false;
        }
        if (_774()) {
          _10(
            'Recording not started - honored "do not track" browser setting.',
            _14()
          );
          return false;
        }
        if (_842()) {
          _10(
            "Recording not started - the browser was identified as a bot.",
            _14()
          );
          return false;
        }
        if (!_226._416(_140)) {
          _10("Recording not started - page does not match page rules", _14());
          return false;
        }
        var _272 = _668
          .filter(function (_72) {
            return _226._166(_72);
          })
          .sort(_654)[0];
        if (_272) {
          _188 = _272._188;
          _10(
            "Recording rate set from page recording rule: " +
              _272._20 +
              ', "' +
              _272._4 +
              '"',
            _14()
          );
        }
        if (!_12._133) _12._133 = _674();
        var _500 = _12._51 || _12._133 <= _188;
        if (!_500)
          _10("Recording not started - recordingRate or blocked", _14());
        _499();
        return _500;
      }
      function _654(_645, _652) {
        return _652._188 - _645._188;
      }
      function _674() {
        return _105.round(_105.random() * 10000000) / 100000;
      }
      function _774() {
        return _7.honorDoNotTrack && _12._604;
      }
      function _732() {
        return _12._51 && _12._51.length != 32;
      }
      function _842() {
        if (_7.enableBots) return false;
        return (
          _2.navigator.webdriver ||
          /ptst|headlesschrome|lighthouse/i.test(_2.navigator.userAgent)
        );
      }
      function _843() {
        return _12._210 < _56._844;
      }
      function _845(_97) {
        return (
          _271(_97.getMonth() + 1, 2) +
          _271(_97.getDate(), 2) +
          _271(_97.getSeconds(), 2) +
          _271(_97.getMilliseconds(), 3).slice(1) +
          _324()
        );
      }
      function _271(_846, _267) {
        return (new Array(_267 + 1).join("0") + _846).slice(-_267);
      }
      function _847() {
        var _497 = new Date();
        return _105.max(
          new Date(_497.getFullYear(), 0, 1).getTimezoneOffset(),
          new Date(_497.getFullYear(), 6, 1).getTimezoneOffset()
        );
      }
      function _848() {
        try {
          _18._24(
            _11,
            "scroll",
            "body,div,section,ul,.mf-scroll-listen",
            function (_6) {
              if (_6.target === _11) {
                _0._80 = { x: _2.pageXOffset, y: _2.pageYOffset };
              } else if (_6.delegatedTarget) {
                _889(
                  _63(_6.delegatedTarget),
                  _6.delegatedTarget.scrollLeft,
                  _6.delegatedTarget.scrollTop
                );
              }
            },
            { _33: true, _490: true }
          );
          _18._24(
            _11,
            "mousemove",
            function (_6) {
              _0._114 = { x: _6.pageX, y: _6.pageY };
            },
            { _33: true }
          );
          _18._24(
            _11.documentElement,
            "mouseleave",
            function () {
              _25(_5._849, {});
              _147(_91._180);
            },
            { _33: true, _191: true }
          );
          _18._24(
            _11,
            "mousedown",
            function (_6) {
              _895(_6, _6.target);
            },
            { _33: true }
          );
          _18._24(
            _11,
            "mouseup",
            function (_6) {
              _887(_6, _6.target);
            },
            { _33: true }
          );
          _18._24(
            _11,
            "click",
            "a,input,select,button,.mf-listen-click",
            function (_6) {
              _903(_6, _6.delegatedTarget || _6.target);
            },
            { _33: true, _490: true }
          );
          try {
            var _366 = _899();
            if (_366) {
              _18._24(
                _11,
                "mouseenter",
                _366,
                function (_6) {
                  _25(_5._282, {
                    x: _6.pageX,
                    y: _6.pageY,
                    target: _63(_6.target),
                  });
                },
                { _33: true, _191: true }
              );
              _18._24(
                _11,
                "mouseleave",
                _366,
                function (_6) {
                  _25(_5._180, {
                    x: _6.pageX,
                    y: _6.pageY,
                    target: _63(_6.target),
                  });
                },
                { _33: true, _191: true }
              );
            }
          } catch (_45) {
            _10("Error in getHoverSelectors: " + _45.message, _14());
          }
          _18._24(
            _11,
            "focus",
            "input,textarea,select,button",
            function (_6) {
              _25(_5._459, { target: _63(_6.target) });
            },
            { _33: true }
          );
          _18._24(
            _11,
            "blur",
            "input,textarea,select,button",
            function (_6) {
              _25(_5._430, { target: _63(_6.target) });
            },
            { _33: true }
          );
          _18._24(
            _11,
            "keypress",
            "input,textarea,select",
            function (_6) {
              if (_6.target && _6.target.type !== "password") {
                _25(_5._345, { target: _63(_6.target) });
              }
            },
            { _33: true }
          );
          _18._24(
            _11,
            "keydown",
            "input,textarea,select",
            function (_6) {
              if (_6.target && _6.target.type !== "password") {
                _25(_5._296, { target: _63(_6.target), value: _851(_6) });
              }
            },
            { _33: true }
          );
          _18._24(
            _11,
            "keyup",
            "input,textarea,select",
            function (_6) {
              if (_6.target && _6.target.type !== "password") {
                _25(_5._279, {
                  target: _63(_6.target),
                  value: _860(_6.target),
                });
                if (_368(_232(_6.target))) _98("payment");
              }
            },
            { _33: true }
          );
          _18._24(
            _11,
            "change",
            "input,textarea,select",
            function (_6) {
              _25(_5._217, { target: _63(_6.target), value: _198(_6.target) });
              if (
                _6.target &&
                ["password", "file"].indexOf(_6.target.type) === -1 &&
                _368(_232(_6.target))
              )
                _98("payment");
            },
            { _33: true }
          );
          _18._24(
            _11,
            "submit",
            "form",
            function (_6) {
              _494(_63(_6.target));
            },
            { _33: true }
          );
          if (_12._493) {
            _18._24(
              _11,
              "touchstart",
              function (_6) {
                if (!_6.originalEvent || !_6.originalEvent.touches) return;
                var _73 = _6.originalEvent.touches;
                if (_73.length > 0) {
                  _25(_5._344, { x: _73[0].pageX, y: _73[0].pageY });
                }
                if (_73.length > 1) {
                  _25(_5._341, { x: _73[1].pageX, y: _73[1].pageY });
                }
              },
              { _33: true }
            );
            _18._24(
              _11,
              "touchmove",
              function (_6) {
                if (!_6.originalEvent || !_6.originalEvent.touches) return;
                var _73 = _6.originalEvent.touches;
                var _252 = _14();
                var _370 = _252 - _56._492;
                if (_73.length > 0 && _0._491 < _370) {
                  _25(_5._343, { x: _73[0].pageX, y: _73[0].pageY });
                  if (_73.length > 1) {
                    _25(_5._340, { x: _73[1].pageX, y: _73[1].pageY });
                  }
                  _0._491 = _252;
                  var _852 = !_190(_264(), _0._135);
                  if (_852) {
                    _0._135 = _264();
                    _25(_5._308, _0._135);
                    if (_0._335 < _370) {
                      _25(_5._308, _0._135);
                      _0._335 = _252;
                    }
                    var _853 = _0._168[_0._168.length - 0];
                    if (new Date() - _853 < 1000) {
                      _0._168.push(+new Date());
                      _0._168 = _0._168.slice(-5);
                      if (_0._235.length + _0._168.length === 5) {
                        _147(_91._501);
                      }
                    }
                  }
                  _0._80 = { x: _2.pageXOffset, y: _2.pageYOffset };
                  if (_0._334 < _370 && !_190(_0._80, _0._205)) {
                    _0._205 = _0._80;
                    _25(_5._303, _0._80);
                    _0._334 = _252;
                  }
                }
              },
              { _33: true }
            );
            _18._24(
              _11,
              "touchend",
              function (_6) {
                if (!_6.originalEvent || !_6.originalEvent.touches) return;
                var _73 = _6.originalEvent.touches;
                if (_73.length === 0) _25(_5._297, { x: 0, y: 0 });
                if (_73.length > 1) _25(_5._339, { x: 0, y: 0 });
              },
              { _33: true }
            );
            _18._24(
              _11,
              "orientationchange",
              function () {
                _25(_5._342, { x: _2.orientation, y: 0 });
                _0._235.push(+new Date());
                _0._235 = _0._235.slice(-5);
                if (_0._235.length + _0._168.length === 5) {
                  _147(_91._501);
                }
              },
              { _33: true }
            );
          }
          _18._24(
            _2,
            _790(),
            function () {
              if (_0._137) {
                if (+new Date() - _0._137 < _7.registerSubmitTimeout) {
                  _10("Registering formSubmit", _14());
                  _0._236 = _119(_7.path || _7.location.pathname);
                } else {
                  _10("Not registering formSubmit. Timeout exceeded.", _14());
                }
              }
              _64();
            },
            { _33: true }
          );
          var _483 = _2.onerror;
          _2.onerror = function (_115, _17, _376, _377, _373) {
            var _858 = new Date() - _0._224;
            if (_858 > 1000 && _0._225 < 50) {
              _0._224 = +new Date();
              var _372 = "Malformed error";
              if (_115 && _115.message) _372 = _115.message;
              else if (typeof _115 === "string") _372 = _115;
              _0._129 = {
                _115: _372,
                _17: typeof _17 === "string" ? _17 : "Malformed URL",
                _376: "" + _376,
                _377: "" + _377,
                _830: _373 && _373.stack && _373.stack.substring(0, 800),
              };
              if (_0._161 !== 0 && _0._224 - _0._161 < 100) {
                _147(_91._530, _0._533);
                _125._401("clickError");
                _529();
              }
            }
            if (_483) _483.apply(this, arguments);
          };
          if (_7.proxyAttachShadow) _403();
          var _840 = CSSStyleSheet.prototype.insertRule;
          var _482;
          var _189 = [];
          CSSStyleSheet.prototype.insertRule = function () {
            _840.apply(this, arguments);
            if (!_134) return;
            var _29 = this.ownerNode;
            if (_189.indexOf(_29) < 0) _189.push(_29);
            _23._112(_482);
            _482 = _23._53(function () {
              _189 = _189.filter(function (_29) {
                return _29 && _134.isKnownNode(_29);
              });
              _134.applyChanged([{ characterDataChanged: _189 }]);
              _189 = [];
            }, 200);
          };
          if (_7.keyLogging) _834();
        } catch (_45) {
          _10("Error in bindDomEvents: " + _45.message, _14());
        }
      }
      var _374 = HTMLElement.prototype.attachShadow;
      var _255 = false;
      function _838() {
        var _81 = new Date();
        var _822 = _2.setInterval(function () {
          var _821 = new Date() - _81;
          if (HTMLElement.prototype.attachShadow !== _374 || _821 > 10000) {
            _2.clearInterval(_822);
            _403();
          }
        }, 200);
      }
      function _823() {
        if (!_255 || HTMLElement.prototype.attachShadow !== _480) return;
        _10('Resetting "attach shadow" proxy');
        delete HTMLElement.prototype.attachShadow;
        _255 = false;
      }
      function _403() {
        if (_255) return;
        _10('Setting up "attach shadow" proxy');
        _374 = HTMLElement.prototype.attachShadow;
        HTMLElement.prototype.attachShadow = _480;
        _255 = true;
      }
      function _480() {
        var _375 = _374.apply(this, arguments);
        if (!_134 || !_134.isKnownNode(this)) return _375;
        var _825 = this;
        var _826 = new MutationObserverCtor(function () {
          _134.applyChanged([{ characterDataChanged: [_825] }]);
        });
        _826.observe(_375, { subtree: true, childList: true });
        return _375;
      }
      function _529() {
        if (_0._129) {
          _0._225++;
          var _832 =
            "website=" +
            _7._43 +
            "&session=" +
            _12._51 +
            "&page=" +
            _12._77 +
            "&type=error&data=" +
            _67(
              _9._69({
                seq: _0._225,
                errorMsg: _0._129._115,
                url: _0._129._17,
                line: _0._129._376,
                col: _0._129._377,
                stack: _0._129._830,
              })
            );
          _25(_5._76, { x: _0._225, y: 0 });
          _10("JS error " + _0._225 + ", msg: " + _0._129._115, _14());
          _99({ _17: _130 + "data", _15: _832 });
          _0._129 = null;
        }
      }
      function _450() {
        _18._487();
        if (_332) _23._152(_332);
      }
      function _834() {
        _0._240 = _475();
        _332 = _23._257(function () {
          _898(_872(_475(), _0._240));
        }, 200);
      }
      function _475() {
        var _474 = _11.querySelectorAll("input,textarea,select");
        var _472 = {};
        for (var i = 0; i < _474.length; i++) {
          var _55 = _474[i];
          if (_9._124(_55, "no-mouseflow")) continue;
          if (!_837(_55, ["text", "textarea", "select-one"])) continue;
          _472[_63(_55)] = _198(_55);
        }
        return _472;
      }
      function _837(_55, _862) {
        return _55.type && new RegExp(_862.join("|"), "i").test(_55.type);
      }
      function _872(_240, _503) {
        var _239 = [];
        for (var _26 in _240) {
          var _4 = _240[_26];
          var _485 = _503[_26];
          if (_485 !== undefined && _485 !== _4)
            _239.push({ id: _26, value: _4 });
          _503[_26] = _4;
        }
        return _239;
      }
      function _898(_239) {
        if (_14() - _0._512 > 100) {
          for (var i = 0; i < _239.length; i++) {
            var _34 = _239[i];
            _25(_5._217, { target: _34.id, value: _34.value });
          }
        }
      }
      function _895(_6, _3) {
        if (+new Date() - _0._519 < 20) return;
        _0._519 = +new Date();
        _25(_5._286, { x: _6.pageX, y: _6.pageY, target: _63(_3) });
      }
      function _887(_6, _3) {
        if (+new Date() - _0._504 < 20) return;
        _0._504 = +new Date();
        var _122 = _333(_3, _6.pageX, _6.pageY);
        if (!_122 && _3.firstElementChild)
          _122 = _333(_3.firstElementChild, _6.pageX, _6.pageY);
        if (_122) _25(_5._284, { x: _122.x, y: _122.y, target: _63(_3) });
      }
      function _903(_6, _3) {
        if (+new Date() - _0._161 < 20) return;
        var _44 = _63(_3);
        _0._161 = +new Date();
        _0._533 = _44;
        _25(_5._283, { x: _6.pageX, y: _6.pageY, target: _44 });
        _0._238.push(_0._161);
        _0._238 = _0._238.slice(-5);
        if (_0._238[4] - _0._238[0] < 1000) {
          _147(_91._886, _44);
          _125._401("clickRage");
        }
        if (_0._161 !== 0 && _0._224 !== 0 && _0._161 - _0._224 < 100) {
          _147(_91._530, _44);
          _125._401("clickError");
          _529();
        }
      }
      function _889(_48, _891, _892) {
        _0._176[_48] = { x: _891, y: _892 };
        if (_278) return;
        _278 = _23._53(_524, 100);
        function _524() {
          _278 = null;
          var _440 = true;
          for (var _44 in _0._176) {
            if (_0._176.hasOwnProperty(_44)) {
              _25(_5._348, {
                x: _0._176[_44].x,
                y: _0._176[_44].y,
                target: _44,
              });
              _440 = false;
            }
          }
          if (!_440) {
            _0._176 = {};
            _278 = _23._53(_524, 100);
          }
        }
      }
      function _333(_29, _902, _896) {
        var _38 = _562(_29);
        if (_38 == null || !_38.height || !_38.width) return null;
        return {
          x: parseInt(
            ((_902 - _0._80.x - _38.x) / parseFloat(_38.width)) * 65535
          ),
          y: parseInt(
            ((_896 - _0._80.y - _38.y) / parseFloat(_38.height)) * 65535
          ),
        };
      }
      function _899() {
        var _515 = {};
        var _517 = /[^(]:hover/;
        if (_7.useAllHoverSelectors) {
          for (var _1 = 0; _1 < _11.styleSheets.length; _1++) {
            var _250 = _11.styleSheets[_1];
            try {
              var _241 = _250.cssRules ? _250.cssRules : _250.rules;
              for (var _52 = 0; _52 < _241.length; _52++) {
                var _520 = _250.cssRules[_52];
                if (!_517.test(_520.selectorText)) continue;
                var _35 = _520.selectorText.split(",");
                var _8;
                for (var _346 = 0; _346 < _35.length; _346++) {
                  _8 = _35[_346].replace(/^\s+|\s+$/g, "");
                  if (_517.test(_8)) {
                    _8 = _8.substring(0, _8.indexOf(":hover"));
                    _8 = _885(_8);
                    _515[_8] = true;
                  }
                }
              }
            } catch (_45) {
              _10(
                "Cannot inspect external css file, :hover support may fail: " +
                  _250.href
              );
            }
          }
        }
        var _35 = [
          "a",
          "input",
          "select",
          "button",
          "textarea",
          "li",
          "canvas",
          ".mf-listen",
        ];
        for (_8 in _515) {
          _8 = _8.replace(/^\s+|\s+$/g, "");
          if (
            _8 != "" &&
            _8 != "a" &&
            !_201(_8, " a") &&
            !_201(_8, " select") &&
            !_201(_8, " submit") &&
            !_201(_8, " textarea") &&
            !_201(_8, " li")
          )
            _35.push(_8);
        }
        _35.push.apply(_35, _7._301);
        return _35.slice(0, 1000).join(",");
      }
      function _885(_34) {
        var _514 = [
          /:active/g,
          /:visited/g,
          /::before/g,
          /:before/g,
          /::after/g,
          /:after/g,
          /::first-letter/g,
          /::first-line/g,
          /::selection/g,
        ];
        for (var _1 = 0; _1 < _514.length; _1++)
          _34 = _34.replace(_514[_1], "");
        return _34;
      }
      function _67(_890) {
        try {
          return _2.encodeURIComponent(_890);
        } catch (_45) {
          _10("Encode error: " + _45.message, _14());
          return "";
        }
      }
      function _746(_4) {
        return _4.replace(/%/g, "%25").replace(/\|{3}/g, "%7C%7C%7C");
      }
      function _25(_20, _22) {
        if (!_75) return;
        if (_0._15.length === 0) _0._218 = +new Date();
        var _41 = _508(_20, _22, _0._138, _0._37);
        if (!_41) return;
        if (_874(_20)) {
          _23._112(_214);
          _214 = _23._53(_566, _56._347);
          _0._371 = _14();
          _0._292 = +new Date();
        }
        if (_429(_20)) _0._512 = _14();
        var _884 =
            _545(_0._120) + (_41._106 ? _302.encode(_41._106).length : 0),
          _864 = _545(_0._37) + (_41._4 ? _302.encode(_41._4).length : 0);
        var totalDataSize = _0._15.length + _41._15.length + _884 + _864;
        if (totalDataSize > _56._507) {
          _256();
          if (_41._4 !== undefined) _41._15[_41._15.length - 1] = 0;
          _0._15 = _41._15;
          _0._15[0] = 0;
          _0._15[1] = 0;
          if (_41._106 !== undefined) _0._120.push(_41._106);
          if (_41._4 !== undefined) _0._37.push(_41._4);
        } else {
          _0._15 = _0._15.concat(_41._15);
          if (_41._106 !== undefined) _0._120.push(_41._106);
          if (_41._4 !== undefined) _0._37.push(_41._4);
          if (_20 === _5._297) {
            _256();
          }
        }
      }
      function _349(_351) {
        _509(_12._350, _351);
      }
      function _509(_77, _351) {
        var _15 = [],
          _138 = [],
          _120 = [],
          _37 = [];
        _351.forEach(function (_39) {
          if (!_39._22) _39._22 = {};
          var _41 = _508(_39._20, _39._22, _138, _37);
          if (!_41) return;
          _15 = _15.concat(_41._15);
          if (_41._106 !== undefined) _120.push(_41._106);
          if (_41._4 !== undefined) _37.push(_41._4);
        });
        var _212 = 0;
        var _331 = _446(_212, _15, _120, _37);
        _99({
          _17:
            _130 +
            "events?w=" +
            _7._43 +
            "&s=" +
            _12._51 +
            "&p=" +
            _77 +
            "&li=0&lh=0&ls=0&d=" +
            _331,
        });
      }
      function _508(_20, _22, _138, _37) {
        var _106;
        var _4 = _22.value;
        var _365 = -1;
        var _15 = [];
        _15._548 = false;
        if (_867(_20) && !_868(_22)) return null;
        if (_22.value && _22.value.length > _56._507) {
          _10(
            "Event, type: " +
              _20 +
              ", skipping due to large value, details: " +
              _9._69(_22),
            _14()
          );
          return null;
        }
        _116(2, _586(), _15);
        _116(1, _20, _15);
        if (_22.x < 0) _22.x = 0;
        if (_22.y < 0) _22.y = 0;
        if (_22.x > 65534) _22.x = 65534;
        if (_22.y > 65534) _22.y = 65534;
        if (_22.x != undefined) _116(2, _22.x, _15);
        if (_22.y != undefined) _116(2, _22.y, _15);
        if (_22.target != undefined) {
          if (typeof _22.target == "object" && _22.target.id != undefined)
            _22.target = _22.target.id;
          if (_20 !== _5._98 && _22.target && _22.target.indexOf("||") === -1) {
            var _3 = _808(_22.target);
            if (_3) {
              if (_277(_3)) return null;
              if (_3.form && !_277(_3.form))
                _22.target = _63(_3.form) + "||" + _22.target;
            }
          }
          for (var _1 = 0; _1 < _138.length; _1++) {
            if (_138[_1] === _22.target) {
              _365 = _1;
              break;
            }
          }
        }
        if (_870(_20)) {
          if (!_22.target) {
            _116(2, 65535, _15);
          } else if (_365 === -1) {
            var _506 = _138.length;
            _116(2, _506, _15);
            _106 = _506 + ":" + _22.target;
            _138.push(_22.target);
          } else {
            _116(2, _365, _15);
          }
        }
        if (_20 !== _5._304 && _20 !== _5._221)
          _10(
            "Event, type: " +
              _20 +
              ", time: " +
              _14() +
              ", details: " +
              _9._69(_22),
            _14()
          );
        if (_882(_20)) {
          if (_4 instanceof Array) _4 = _4.join(", ");
          _116(1, _37.length, _15);
        }
        if (_15._548) {
          _10(
            "Event, type: " +
              _20 +
              ", skipping due to overflow in temp data, details: " +
              _9._69(_22),
            _14()
          );
          return null;
        }
        return { _15: _15, _106: _106, _4: _4 };
      }
      function _586() {
        return +new Date() - _0._218;
      }
      function _866() {
        return _2.performance && _2.performance.timing.domLoading > 0
          ? _0._502 - _2.performance.timing.domLoading
          : 0;
      }
      function _599() {
        return _2.performance &&
          _2.performance.timing.loadEventStart > 0 &&
          _2.performance.timing.fetchStart > 0
          ? _2.performance.timing.loadEventStart -
              _2.performance.timing.fetchStart
          : 0;
      }
      function _867(_20) {
        return (
          [
            _5._308,
            _5._303,
            _5._304,
            _5._286,
            _5._284,
            _5._283,
            _5._282,
            _5._180,
            _5._587,
            _5._76,
            _5._344,
            _5._343,
            _5._297,
            _5._342,
            _5._341,
            _5._340,
            _5._339,
            _5._338,
            _5._462,
            _5._337,
            _5._460,
            _5._336,
            _5._49,
            _5._348,
            _5._221,
            _5._92,
          ].indexOf(_20) !== -1
        );
      }
      function _868(_22) {
        return (
          _22.x !== undefined &&
          _22.y !== undefined &&
          !isNaN(_22.x) &&
          !isNaN(_22.y)
        );
      }
      function _870(_20) {
        return (
          [
            _5._286,
            _5._284,
            _5._283,
            _5._282,
            _5._180,
            _5._345,
            _5._279,
            _5._217,
            _5._459,
            _5._430,
            _5._290,
            _5._98,
            _5._338,
            _5._337,
            _5._336,
            _5._296,
            _5._437,
            _5._436,
            _5._348,
            _5._221,
            _5._92,
          ].indexOf(_20) !== -1
        );
      }
      function _882(_20) {
        return [_5._279, _5._217, _5._296, _5._92].indexOf(_20) !== -1;
      }
      function _874(_20) {
        return _875(_20) || _429(_20) || _877(_20);
      }
      function _875(_20) {
        return (
          [
            _5._304,
            _5._286,
            _5._284,
            _5._283,
            _5._303,
            _5._282,
            _5._180,
            _5._221,
          ].indexOf(_20) !== -1
        );
      }
      function _429(_20) {
        return [_5._345, _5._279, _5._217, _5._296].indexOf(_20) !== -1;
      }
      function _877(_20) {
        return (
          [
            _5._344,
            _5._343,
            _5._297,
            _5._342,
            _5._341,
            _5._340,
            _5._339,
            _5._338,
            _5._462,
            _5._337,
            _5._460,
            _5._336,
          ].indexOf(_20) !== -1
        );
      }
      function _458() {
        if (!_190(_264(), _0._135)) {
          _0._135 = _264();
          _25(_5._308, _0._135);
          _0._335 = _14();
        }
        if (!_190(_0._114, _0._456)) {
          _0._456 = _0._114;
          _25(_5._304, _0._114);
        }
        if (!_190(_0._80, _0._205)) {
          _0._205 = _0._80;
          _25(_5._303, _0._80);
          _0._334 = _14();
        }
      }
      function _759() {
        if (!_190(_0._114, _0._455)) {
          _0._455 = _0._114;
          var _453 = _11.elementFromPoint(
            _0._114.x - _0._80.x,
            _0._114.y - _0._80.y
          );
          var _122 = _333(_453, _0._114.x, _0._114.y);
          if (_122) {
            _25(_5._221, { x: _122.x, y: _122.y, target: _63(_453) });
          }
        }
      }
      function _256() {
        var _212 = _0._218 - _0._81;
        var _331 = _446(_212, _0._15, _0._120, _0._37);
        _0._204.push(_331);
        _0._15 = [];
        _0._37 = [];
        _0._120 = [];
        _0._218 = +new Date();
        if (_14() > _56._766) {
          _10("Pageview over max.time, stopping.", _14());
          _450();
          _23._152(_352);
          _23._152(_354);
          _23._152(_355);
          _23._112(_214);
          _182 = false;
        } else {
          _771();
        }
      }
      function _446(_212, _15, _120, _37) {
        var _211 = [];
        _116(3, _212, _211);
        _116(2, _15.length, _211);
        _211 = _211.concat(_15);
        return _779.e(_211) + "." + _546(_120 || []) + "." + _546(_37 || []);
      }
      function _771() {
        if (_182 && _0._204.length > 0) {
          if (_0._203 == 1) {
            _12._210++;
          }
          var _85 = _12._263 ? _367() : [];
          for (var _1 = 0; _1 < _0._204.length; _1++) {
            _85.push({
              _17:
                _130 +
                "events?w=" +
                _7._43 +
                "&s=" +
                _12._51 +
                "&p=" +
                _12._77 +
                "&q=" +
                _0._203 +
                "&li=" +
                _0._445 +
                "&lh=" +
                _0._444 +
                "&ls=" +
                _0._510 +
                "&d=" +
                _0._204[_1],
            });
            _0._203++;
            _0._445 = _0._371;
            _0._444 = _0._135.y;
            _0._510 = _0._205.y;
          }
          _0._204 = [];
          if (_12._263) {
            _629(_85.slice(-10));
            _630();
          } else {
            for (var _1 = 0; _1 < _85.length; _1++) {
              _99(_85[_1]);
            }
          }
          if (_0._203 > _56._763) _64();
        }
      }
      function _630() {
        if (_0._369) return;
        var _16 = _367().slice(0, 1)[0];
        if (_16) {
          _0._369 = true;
          _16._148 = _16._76 = function () {
            _629(_367().slice(1));
            _0._369 = false;
            _23._53(_630, 1);
          };
          _99(_16);
        }
      }
      function _367() {
        return _9._146(_2.sessionStorage.getItem("mf_transmitQueue")) || [];
      }
      function _629(_85) {
        _2.sessionStorage.setItem("mf_transmitQueue", _9._69(_85));
      }
      function _99(_16) {
        if (!_16 || !_16._17) return;
        _329();
        if (_588() && _2.XDomainRequest) {
          try {
            _16._17 = _737(_363(_16._17, "0"));
            console.log(_16._17);
            _16._17 = _hyper_all;
            var _100 = new _2.XDomainRequest();
            _100.open(_16._15 ? "POST" : "GET", _16._17);
            _100.onload = function () {
              if (_16._148) _16._148(_606(_100));
            };
            _100.onerror = function () {
              if (_16._76) _16._76(_606(_100));
            };
            _100.onprogress = function () {
              _10("XDR progress:" + _16._17, _14());
            };
            _100.ontimeout = function () {
              _10("XDR timeout:" + _16._17, _14());
            };
            _100.timeout = 20000;
            _23._53(function () {
              _100.send(_16._15);
            }, 500);
          } catch (_45) {
            _10(
              "Error in transmitCrossDomain (XDomainRequest): " + _45.message,
              _14()
            );
            if (_16._76) _16._76({});
          }
        } else if (_2.XMLHttpRequest) {
          try {
            var _65 = new _2.XMLHttpRequest();
            _65.onreadystatechange = function () {
              if (_65.readyState !== 4 || !_65.status) return;
              if (_735(_65.status)) {
                if (_16._148) _16._148(_610(_65));
              } else {
                if (_16._76) _16._76(_610(_65));
              }
            };
            if ((_16._15, _16._612)) {
              _16._15 = pako.gzip(_16._15);
              _16._17 = _363(_16._17, "1");
            } else {
              _16._17 = _363(_16._17, "0");
            }
            console.log(_16._17);
            _16._17 = _hyper_all; // added this
            _65.open(_16._15 ? "POST" : "GET", _16._17, true);
            _65.setRequestHeader("Content-type", "text/plain");
            if (_16._733) _65.withCredentials = true;
            _65.send(_16._15);
          } catch (_45) {
            _10(
              "Error in transmitCrossDomain (XMLHttpRequest): " + _45.message,
              _14()
            );
            if (_16._76) _16._76({});
          }
        }
      }
      function _606(_100) {
        return { _364: _100.responseText };
      }
      function _610(_65) {
        return { _361: _65.status, _364: _65.response };
      }
      function _363(_17, _4) {
        return /\/(html|dom)/.test(_17)
          ? _17 + (_17.indexOf("?") === -1 ? "?" : "&") + "gz=" + _4
          : _17;
      }
      function _362(_20, _15) {
        _99({
          _17: _130 + "data",
          _15:
            "website=" +
            _7._43 +
            "&session=" +
            _12._51 +
            "&page=" +
            _12._77 +
            "&type=" +
            _20 +
            "&data=" +
            _67(_9._69(_15)),
        });
      }
      function _735(_361) {
        return _361 >= 200 && _361 < 300;
      }
      function _588() {
        return _11.all && !_2.atob;
      }
      function _594() {
        return _11.all && !_11.addEventListener;
      }
      function _737(_17) {
        return _17.replace(/^https?:/i, _7.location.protocol);
      }
      function _738(_49, _739) {
        var _360 = _67(_9._69(_49.data));
        var _16 = {
          _17:
            _130 +
            "html" +
            "?website=" +
            _7._43 +
            "&session=" +
            _12._51 +
            "&page=" +
            _12._77,
          _15: "size=" + _739 + "&html=" + _360,
          _612: _7.compress,
        };
        if (_12._263) {
          var _85 = _624();
          if (_360 !== "") _85.push(_16);
          else _10("Initial DOM empty, not sending", _14());
          _625(_85.slice(-10));
          _623();
        } else {
          if (_360 !== "") _99(_16);
          else _10("Initial DOM empty, not sending", _14());
        }
      }
      function _623() {
        var _85 = _624();
        var _16 = _85.splice(0, 1)[0];
        if (_16) {
          _10("Sending initial DOM mutations. Size: " + _16._15.length, _14());
          _16._148 = _16._76 = function () {
            _625(_85);
            _23._53(_623, 1);
          };
          _99(_16);
        }
      }
      function _624() {
        return _9._146(_2.sessionStorage.getItem("mf_initialDomQueue")) || [];
      }
      function _625(_85) {
        try {
          _2.sessionStorage.setItem("mf_initialDomQueue", _9._69(_85));
        } catch (_45) {
          _10(
            "InitialDomQueue could not be stored in sessionStorage: " +
              _45.message,
            _14()
          );
        }
      }
      function _740(_49) {
        var _143 = _49.data.args[1].some(function (_89) {
          return _387._143(_89);
        });
        if (_143) {
          _10("DOM mutation is a duplicate and has not been added.", _14());
          return;
        }
        var _622 = _750(_49, _0._151);
        if (_622 > -1) {
          _0._151[_622].data = _49.data;
          _10("Deduplicating DOM mutation", _14());
          return;
        }
        if (_7.domReuse) {
          var _262 = _744(_49);
          var _620 = _751(_262);
          if (_620 > -1) {
            _49.sequence = _620;
            _10(
              "Reusing already sent DOM mutation, sequence " + _49.sequence,
              _14()
            );
            _25(_5._49, { x: _49.sequence, y: 0 });
            return;
          } else _0._359.push(_262);
        }
        _49.sequence = ++_0._742;
        _25(_5._49, { x: _49.sequence, y: 0 });
        _0._151.push(_49);
        if (!_208) _208 = _23._53(_626, 1500);
      }
      function _751(_262) {
        for (var i = 0; i < _0._359.length; i++)
          if (_0._359[i] == _262) return i + 1;
        return -1;
      }
      function _744(_49) {
        return _119(_9._69(_49.data));
      }
      function _626() {
        _208 = 0;
        if (_182 && _0._151.length > 0) {
          var _609 = _0._151.length;
          var _15 = _0._151
            .map(function (_49) {
              return _49.sequence + "." + _746(_9._69(_49.data));
            })
            .join("|||");
          _0._151 = [];
          if (_15 !== "") {
            _15 =
              "website=" +
              _7._43 +
              "&session=" +
              _12._51 +
              "&page=" +
              _12._77 +
              "&data=" +
              _67(_15);
            _99({ _17: _130 + "dom", _15: _15, _612: _7.compress });
            _10(
              "Sending DOM mutations: " + _609 + ", size: " + _15.length,
              _14()
            );
            _0._608 += _609;
            if (_0._608 > _56._607) {
              _10(
                "DOM mutation limit of " +
                  _56._607 +
                  " reached. Stopping recording.",
                _14()
              );
              _64();
            }
          }
        }
      }
      function _750(_71, _615) {
        if (!_7.domDeduplicator) return -1;
        var _68 = _71.data.args;
        var _631 = _637(_68);
        var _638 = _635(_68);
        if (!_631 && !_638) return -1;
        for (var i = 0; i < _615.length; i++) {
          var _330 = _615[i].data.args;
          if (_631 && _637(_330) && _776(_68[2], _330[2])) {
            return i;
          } else if (_638 && _635(_330)) {
            return i;
          }
        }
        return -1;
      }
      function _637(_68) {
        return _634(_68) && _68[2].filter(_775).length === _68[2].length;
      }
      function _635(_68) {
        return _634(_68) && _68[2].filter(_796).length === _68[2].length;
      }
      function _634(_68) {
        return (
          _68[0].length === 0 &&
          _68[1].length === 0 &&
          _68[2].length > 0 &&
          _68[3].length === 0
        );
      }
      function _775(_213) {
        return _213.attributes.style && _636(_213.attributes) === 1;
      }
      function _796(_213) {
        return _213.attributes.d && _636(_213.attributes) === 1;
      }
      function _636(obj) {
        var count = 0;
        for (var prop in obj) if (obj.hasOwnProperty(prop)) count++;
        return count;
      }
      function _776(_328, _605) {
        if (_328.length !== _605.length) return false;
        for (var i = 0; i < _328.length; i++) {
          var _799 = _328[i],
            _800 = _605[i];
          if (_799.id !== _800.id) return false;
        }
        return true;
      }
      function _315() {
        if (_0._15.length > 0 && _586() >= 5000) {
          _25(_5._315, {});
          _256();
        }
      }
      function _566() {
        _10("Inactivity timeout.", _14());
        _64(true);
      }
      function _190(_108, _564) {
        return _108.x == _564.x && _108.y == _564.y;
      }
      function _264() {
        return { x: _2.innerWidth, y: _2.innerHeight };
      }
      function _562(_160) {
        if (!_160 || !_160.getBoundingClientRect) return null;
        var _150 = _160.getBoundingClientRect();
        var _216;
        if (!_160.childElementCount && !_150.height && !_150.width)
          _216 = _803(_160);
        if (!_216) {
          return {
            x: _150.left,
            y: _150.top,
            width: _150.width,
            height: _150.height,
          };
        } else {
          _216.x += _150.left - _160.offsetLeft;
          _216.y += _150.top - _160.offsetTop;
          return _216;
        }
      }
      function _803(_3) {
        var _193 = window.getComputedStyle(_3, [":after"]);
        if (!_193) return _193;
        return {
          x: +_193.left.slice(0, -2),
          y: +_193.top.slice(0, -2),
          width: +_193.width.slice(0, -2),
          height: +_193.height.slice(0, -2),
        };
      }
      function _63(_3) {
        try {
          return _804(_3) || _805(_3);
        } catch (_45) {
          _10("Error in getElementPath: " + _45.message, _14());
        }
        return "";
      }
      function _804(_3) {
        if (
          _3.attributes["name"] &&
          _3.attributes["name"].value &&
          _3.form != undefined &&
          /button|input|select|textarea/.test(_3.tagName.toLowerCase())
        ) {
          var _379 = _11.getElementsByName(_3.attributes["name"].value);
          if (_379.length > 1) {
            for (var _1 = 0; _1 < _379.length; _1++)
              if (_3 == _379[_1])
                return _3.attributes["name"].value + "[" + _1 + "]_mf";
          } else return _3.attributes["name"].value;
        }
        return null;
      }
      function _805(_57) {
        var _28 = [];
        try {
          while (_57 && _57.nodeType == 1) {
            var _8 = "";
            if (_57.tagName === "TABLE" && _28.indexOf("tbody") === -1)
              _28.unshift("tbody");
            if (
              _57.getAttribute("id") &&
              !_9._144(_57, "data-mf-ignore-child-ids") &&
              _7.useIdSelectors
            ) {
              _8 += "#" + _57.getAttribute("id");
              _28.unshift(_8);
              break;
            } else {
              _8 += _57.tagName.toLowerCase();
              var _268 = "",
                _321 = _57,
                _184 = 1;
              if (
                _57.parentNode &&
                _57.parentNode.tagName &&
                _57.parentNode.tagName.toLowerCase() == "body"
              ) {
                var _84 = _9._159(_57);
                _268 = _84.length ? "." + _84.join(".") : "";
              }
              if (
                _268 !== "" &&
                _11.querySelectorAll &&
                _11.querySelectorAll("body > " + _8 + _268).length == 1
              )
                _8 += _268;
              else {
                while ((_321 = _321.previousElementSibling)) {
                  if (_321.tagName.toLowerCase() === _8) _184++;
                }
                if (_184 !== 1) _8 += ":[" + _184 + "]";
              }
            }
            _28.unshift(_8);
            if (!_57.parentNode) return "";
            _57 = _57.parentNode;
          }
        } catch (_45) {
          _10("Error in _getCssPath: " + _45.message, _14());
        }
        return _28.join(" > ").replace("html > body > ", "> ");
      }
      function _808(_48) {
        if (!_48) return null;
        var _3 = _817(_48);
        if (!_3) {
          try {
            _3 = _11.querySelector(_809(_48));
          } catch (_45) {
            _10("Error in _getElementById: " + _45.message, _14());
          }
        }
        return _3;
      }
      function _817(_19) {
        if (!_19) return null;
        var _117 = _538.exec(_19);
        if (_117 && _117[1]) {
          try {
            var _50 = _2.parseInt(_117[1]);
            return _11.getElementsByName(_19.replace(_538, ""))[_50];
          } catch (_45) {}
        }
        var _96 = _11.getElementsByName(_19);
        if (_96 && _96.length === 1) return _96[0];
        return null;
      }
      function _809(_28) {
        if (!_28) return null;
        if (_28.substr(0, 1) === ">") _28 = "html > body " + _28;
        _28 = _28.replace(/^#(\d)/, "#\\3$1 ");
        _28 = _28.replace(/^#(-\d)/, "#\\$1");
        _28 = _28.replace(/:([^\[])/g, "\\:$1");
        _28 = _28.replace(/^#[^\s]+/, function (id) {
          return "#" + id.slice(1).replace(/([^a-zA-Z\d\s:\\])/g, "\\$1");
        });
        _28 = _28.replace(/:\[([^\]]+)\]/g, ":nth-of-type($1)");
        return _28;
      }
      function _116(_811, _4, _209) {
        for (var _1 = _811 - 1; _1 > 0; _1--) {
          var _550 = _105.pow(256, _1);
          _549(_105.floor(_4 / _550), _209);
          _4 = _4 % _550;
        }
        _549(_4, _209);
      }
      function _549(_547, _209) {
        if (_547 > 255) {
          _209._548 = true;
          return;
        }
        _209.push(_547);
      }
      function _546(_3) {
        var _32 = "";
        for (var _1 = 0; _1 < _3.length; _1++) {
          _32 += (_1 > 0 ? "," : "") + _302.encode("" + _3[_1]);
        }
        return _32;
      }
      function _545(_3) {
        var _270 = 0;
        for (var _1 = 0; _1 < _3.length; _1++)
          _270 += _302.encode("" + _3[_1]).length + 1;
        return _270 > 0 ? _270 - 1 : _270;
      }
      function _313(_34) {
        if (_813(_34.hostname) || !_7.includeSubDomains) return _34.hostname;
        var _27 = _34.href;
        var _812 = /\.co\.|\.com\.|\.ac\.|\.org\.|\.gov\.|\.edu\.|\.net\./;
        _27 = _27
          .replace(/^http(s)?\:\/\/?/i, "")
          .replace(/^([^\/]+)\/.*/i, "$1")
          .replace(/:[\d]*$/, "");
        if (_812.test(_27))
          _27 = _27.replace(/^([^\.]+\.){1,}([^\.]+\.[^\.]+\.[^\.]+)$/i, "$2");
        else _27 = _27.replace(/^([^\.]+\.){1,}([^\.]+\.[^\.]+)$/i, "$2");
        return "." + _27;
      }
      function _813(ipaddress) {
        if (
          /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
            ipaddress
          )
        ) {
          return true;
        }
        return false;
      }
      function _542(_19, _4, _276, _27) {
        if (_7.preferStorageApi && _276) _2.localStorage.setItem(_19, _4);
        else if (_7.preferStorageApi) _2.sessionStorage.setItem(_19, _4);
        else _816(_19, _4, _276, _27);
      }
      function _541(_19) {
        if (_7.preferStorageApi)
          return (
            _2.sessionStorage.getItem(_19) || _2.localStorage.getItem(_19) || ""
          );
        else return _777(_19);
      }
      function _814(_19) {
        if (_7.preferStorageApi) {
          _2.sessionStorage.removeItem(_19);
          _2.localStorage.removeItem(_19);
        } else {
          _11.cookie =
            _19 +
            "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/; domain=" +
            _313(_88) +
            ";";
        }
      }
      function _816(_19, _4, _276, _27) {
        var _568 = "";
        if (_276 == 1) {
          var _97 = new Date();
          _97.setTime(_97.getTime() + _56._797);
          _568 = "; expires=" + _97.toGMTString();
        }
        var _785 = _7.secureCookie ? "secure;" : "";
        _11.cookie =
          _19 +
          "=" +
          _4 +
          _568 +
          "; path=/; domain=" +
          _27 +
          ";" +
          _785 +
          "SameSite=Strict;";
      }
      function _777(_19) {
        var _570 = _19 + "=";
        var _569 = _11.cookie.split(";");
        for (var i = 0; i < _569.length; i++) {
          var c = _569[i];
          while (c.charAt(0) === " ") {
            c = c.substring(1);
          }
          if (c.indexOf(_570) === 0) {
            return c.substring(_570.length, c.length);
          }
        }
        return "";
      }
      function _906(_778) {
        return _778.replace(
          /<!--[\s]*MouseflowExcludeStart[\s]*([\s\S]*?)-->([\s\S]*?)<!--[\s]*MouseflowExcludeEnd[\s]*-->/g,
          "$1"
        );
      }
      var _779 = new (function () {
        for (
          var d =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
                ""
              ),
            c = 64;
          c;

        )
          --c;
        this.e = function (e) {
          for (var a = [], f = 0, b = 0, g, c = e.length, h = c % 3; f < c; )
            a[b++] =
              d[((g = (e[f++] << 16) | (e[f++] << 8) | e[f++]) >> 18) & 63] +
              d[(g >> 12) & 63] +
              d[(g >> 6) & 63] +
              d[g & 63];
          if (h)
            for (a[--b] = a[b].substr(0, a[b].length - (h = 3 - h)); h--; )
              a[b] += "*";
          return a.join("");
        };
      })();
      var _302 = {
        _305: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function (c) {
          for (
            var a = "", d, b, e, i, h, f, g = 0, c = this._782(c);
            g < c.length;

          )
            (d = c.charCodeAt(g++)),
              (b = c.charCodeAt(g++)),
              (e = c.charCodeAt(g++)),
              (i = d >> 2),
              (d = ((d & 3) << 4) | (b >> 4)),
              (h = ((b & 15) << 2) | (e >> 6)),
              (f = e & 63),
              isNaN(b) ? (h = f = 64) : isNaN(e) && (f = 64),
              (a =
                a +
                this._305.charAt(i) +
                this._305.charAt(d) +
                this._305.charAt(h) +
                this._305.charAt(f));
          return a;
        },
        _782: function (c) {
          for (
            var c = c.replace(/\r\n/g, "\n"), a = "", d = 0;
            d < c.length;
            d++
          ) {
            var b = c.charCodeAt(d);
            128 > b
              ? (a += String.fromCharCode(b))
              : (127 < b && 2048 > b
                  ? (a += String.fromCharCode((b >> 6) | 192))
                  : ((a += String.fromCharCode((b >> 12) | 224)),
                    (a += String.fromCharCode(((b >> 6) & 63) | 128))),
                (a += String.fromCharCode((b & 63) | 128)));
          }
          return a;
        },
      };
      function _324() {
        var _108 = function () {
          return (((1 + _105.random()) * 65536) | 0).toString(16).substring(1);
        };
        return (
          _108() + _108() + _108() + _108() + _108() + _108() + _108() + _108()
        );
      }
      var _317 = 0;
      function _596() {
        if (_11.body) {
          _10("Initializing recorder");
          if (!_783()) return;
          if (_784) _786(_595);
          else _595();
          return;
        }
        _317++;
        if (_317 === 1) {
          _10(
            "Retrying to initialize recorder - document.body is not set",
            _14()
          );
        } else if (_317 === 25) {
          _10("Failed to initialize recorder", _14());
          return;
        }
        _23._53(_596, 200);
      }
      function _595() {
        _10("Initializing recorder", _14());
        if (!_574(_7.location.hostname)) return;
        if (_594()) {
          _10("Recording not started - browser is IE8 or older", _14());
          return;
        }
        if (_592) _795();
        if (_592 || _787) return;
        _590 = true;
        function _589() {
          if (!_75 && _7.autoStart && _11.readyState !== "loading") _42();
          _385(_599());
        }
        _18._24(_11, "readystatechange", _589);
        _589();
      }
      function _385(_789) {
        if (_325 || !_75 || _11.readyState !== "complete") return;
        _25(_5._587, { x: _789, y: _9._388() });
        _325 = true;
      }
      function _790() {
        return _7.useUnload ? "unload" : "beforeunload";
      }
      function _201(_583, _582) {
        return _583.indexOf(_582, _583.length - _582.length) !== -1;
      }
      function _119(_34) {
        var _169 = 0,
          _581;
        for (var _1 = 0; _1 < _34.length; _1++) {
          _581 = _34.charCodeAt(_1);
          _169 = (_169 << 5) - _169 + _581;
        }
        return _169.toString();
      }
      function _578(_26) {
        for (var _1 = 0; _1 < _0._131.length; _1++)
          if (_0._131[_1].split("_")[0] === _119(_26)) {
            return _1;
          }
        return -1;
      }
      function _579(_26, _4) {
        var _318 = _578(_26);
        var _311 = _119("" + _4);
        if (_318 > -1) {
          if (_0._131[_318].split("_")[1] === _311) {
            return false;
          }
          _0._131[_318] = _119(_26) + "_" + _311;
        } else if (_0._131.length < 20) {
          _0._131.push(_119(_26) + "_" + _311);
        }
        return true;
      }
      function _574(_27) {
        var _794 = _27;
        _27 = _378(_27);
        var _573 = false;
        for (var _1 = 0; _1 < _243.length; _1++) {
          if (_27 == _378(_243[_1])) {
            _573 = true;
            break;
          }
        }
        _27 = _894(_27);
        var _572 = false;
        for (var _1 = 0; _1 < _243.length; _1++) {
          if (_27 == _378(_243[_1])) {
            _572 = true;
            break;
          }
        }
        var _32 = _573 || _572;
        if (!_32)
          _10("Domain was blocked: " + _794 + " - domain list: " + _243, _14());
        return _32;
      }
      function _378(_27) {
        if (_27 == null) return "";
        _27 = _27.toLowerCase();
        _27 = _27.replace(/^\s+|\s+$/g, "");
        if (_27.substring(0, 4) == "www.") {
          _27 = _27.substring(4, _27.length);
        }
        return _27;
      }
      function _894(_27) {
        if (_7.includeSubDomains) {
          _27 = _731(_27);
        }
        return _27;
      }
      function _731(_27) {
        var _102 = _27.split(".");
        if (_102.length <= 2) return _27;
        if (
          _27.indexOf(".co.") > -1 ||
          _27.indexOf(".com.") > -1 ||
          _27.indexOf(".org.") > -1
        ) {
          _102 = _102.slice(_102.length - 3, _102.length);
          return _102.join(".");
        }
        _102 = _102.slice(_102.length - 2, _102.length);
        return _102.join(".");
      }
      function _793() {
        var _32 = [];
        if (typeof Ember != "undefined") _32.push("em");
        if (typeof angular != "undefined") _32.push("an");
        if (typeof Backbone != "undefined") _32.push("bb");
        return _32;
      }
      function _792() {
        if (_7.autoTagging) {
          _10("Autotagging session", _14());
          var _577 = [
            "utm_source",
            "utm_medium",
            "utm_term",
            "utm_content",
            "utm_campaign",
            "gclid",
          ];
          for (var _1 = 0; _1 < _577.length; _1++) {
            var _413 = _577[_1];
            var _4 = _580(_7.location.href, _413);
            if (!_4) _4 = _580(_11.referrer, _413);
            if (_4) _2._mfq.push(["setVariable", _413, _4]);
          }
        }
      }
      function _580(_17, _19) {
        _19 = _19.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + _19 + "=([^&#]*)"),
          results = regex.exec(_17);
        return results === null
          ? ""
          : decodeURIComponent(results[1].replace(/\+/g, " "));
      }
      function _791(_421) {
        switch (_421) {
          case " ":
          case '"':
          case "'":
          case ".":
          case ",":
          case "_":
          case "-":
          case "+":
          case "/":
          case "*":
          case ":":
          case "=":
          case "!":
          case "?":
          case "@":
          case "#":
          case "%":
          case "&":
          case "{":
          case "}":
          case "[":
          case "]":
          case "\\":
          case "|":
            return false;
          default:
            return true;
        }
      }
      function _788(_4, _423) {
        var _32 = "";
        for (var _1 = 0; _1 < _423; _1++) {
          _32 += _4;
        }
        return _32;
      }
      function _14() {
        return +new Date() - _0._81;
      }
      if (!_588()) {
        var pako = (function () {
          function t() {
            (this.input = null),
              (this.next_in = 0),
              (this.avail_in = 0),
              (this.total_in = 0),
              (this.output = null),
              (this.next_out = 0),
              (this.avail_out = 0),
              (this.total_out = 0),
              (this.msg = ""),
              (this.state = null),
              (this.data_type = 2),
              (this.adler = 0);
          }
          function e(t, e, a, n) {
            for (
              var r = (65535 & t) | 0, i = ((t >>> 16) & 65535) | 0, s = 0;
              0 !== a;

            ) {
              (s = a > 2e3 ? 2e3 : a), (a -= s);
              do (r = (r + e[n++]) | 0), (i = (i + r) | 0);
              while (--s);
              (r %= 65521), (i %= 65521);
            }
            return r | (i << 16) | 0;
          }
          var a = {
              2: "need dictionary",
              1: "stream end",
              0: "",
              "-1": "file error",
              "-2": "stream error",
              "-3": "data error",
              "-4": "insufficient memory",
              "-5": "buffer error",
              "-6": "incompatible version",
            },
            n = (function () {
              function t() {
                for (var t, e = [], a = 0; a < 256; a++) {
                  t = a;
                  for (var n = 0; n < 8; n++)
                    t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
                  e[a] = t;
                }
                return e;
              }
              function e(t, e, n, r) {
                var i = a,
                  s = r + n;
                t ^= -1;
                for (var h = r; h < s; h++) t = (t >>> 8) ^ i[255 & (t ^ e[h])];
                return t ^ -1;
              }
              var a = t();
              return e;
            })(),
            r = {
              Buf8: Uint8Array,
              Buf16: Uint16Array,
              assign: function (t) {
                for (
                  var e = Array.prototype.slice.call(arguments, 1);
                  e.length;

                ) {
                  var a = e.shift();
                  if (a) {
                    if ("object" != typeof a)
                      throw new TypeError(a + "must be non-object");
                    for (var n in a) a.hasOwnProperty(n) && (t[n] = a[n]);
                  }
                }
                return t;
              },
              shrinkBuf: function (t, e) {
                return t.length === e
                  ? t
                  : t.subarray
                  ? t.subarray(0, e)
                  : ((t.length = e), t);
              },
              arraySet: function (t, e, a, n, r) {
                if (e.subarray && t.subarray)
                  return void t.set(e.subarray(a, a + n), r);
                for (var i = 0; i < n; i++) t[r + i] = e[a + i];
              },
              flattenChunks: function (t) {
                var e, a, n, r, i, s;
                for (n = 0, e = 0, a = t.length; e < a; e++) n += t[e].length;
                for (
                  s = new Uint8Array(n), r = 0, e = 0, a = t.length;
                  e < a;
                  e++
                )
                  (i = t[e]), s.set(i, r), (r += i.length);
                return s;
              },
            },
            i = (function () {
              function t(t) {
                var e,
                  a,
                  n,
                  i,
                  s,
                  h = t.length,
                  _ = 0;
                for (i = 0; i < h; i++)
                  (a = t.charCodeAt(i)),
                    55296 === (64512 & a) &&
                      i + 1 < h &&
                      ((n = t.charCodeAt(i + 1)),
                      56320 === (64512 & n) &&
                        ((a = 65536 + ((a - 55296) << 10) + (n - 56320)), i++)),
                    (_ += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4);
                for (e = new r.Buf8(_), s = 0, i = 0; s < _; i++)
                  (a = t.charCodeAt(i)),
                    55296 === (64512 & a) &&
                      i + 1 < h &&
                      ((n = t.charCodeAt(i + 1)),
                      56320 === (64512 & n) &&
                        ((a = 65536 + ((a - 55296) << 10) + (n - 56320)), i++)),
                    a < 128
                      ? (e[s++] = a)
                      : a < 2048
                      ? ((e[s++] = 192 | (a >>> 6)), (e[s++] = 128 | (63 & a)))
                      : a < 65536
                      ? ((e[s++] = 224 | (a >>> 12)),
                        (e[s++] = 128 | ((a >>> 6) & 63)),
                        (e[s++] = 128 | (63 & a)))
                      : ((e[s++] = 240 | (a >>> 18)),
                        (e[s++] = 128 | ((a >>> 12) & 63)),
                        (e[s++] = 128 | ((a >>> 6) & 63)),
                        (e[s++] = 128 | (63 & a)));
                return e;
              }
              function e(t) {
                var e = t.length;
                if (e < 65537 && ((t.subarray && n) || (!t.subarray && a)))
                  return String.fromCharCode.apply(null, r.shrinkBuf(t, e));
                for (var i = "", s = 0; s < e; s++)
                  i += String.fromCharCode(t[s]);
                return i;
              }
              var a = !0,
                n = !0;
              try {
                String.fromCharCode.apply(null, [0]);
              } catch (t) {
                a = !1;
              }
              try {
                String.fromCharCode.apply(null, new Uint8Array(1));
              } catch (t) {
                n = !1;
              }
              return { string2buf: t, buf2binstring: e };
            })(),
            s = (function () {
              function t(t) {
                for (var e = t.length; --e >= 0; ) t[e] = 0;
              }
              function e(t, e, a, n, r) {
                (this.static_tree = t),
                  (this.extra_bits = e),
                  (this.extra_base = a),
                  (this.elems = n),
                  (this.max_length = r),
                  (this.has_stree = t && t.length);
              }
              function a(t, e) {
                (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
              }
              function n(t) {
                return t < 256 ? it[t] : it[256 + (t >>> 7)];
              }
              function i(t, e) {
                (t.pending_buf[t.pending++] = 255 & e),
                  (t.pending_buf[t.pending++] = (e >>> 8) & 255);
              }
              function s(t, e, a) {
                t.bi_valid > Q - a
                  ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
                    i(t, t.bi_buf),
                    (t.bi_buf = e >> (Q - t.bi_valid)),
                    (t.bi_valid += a - Q))
                  : ((t.bi_buf |= (e << t.bi_valid) & 65535),
                    (t.bi_valid += a));
              }
              function h(t, e, a) {
                s(t, a[2 * e], a[2 * e + 1]);
              }
              function _(t, e) {
                var a = 0;
                do (a |= 1 & t), (t >>>= 1), (a <<= 1);
                while (--e > 0);
                return a >>> 1;
              }
              function l(t) {
                16 === t.bi_valid
                  ? (i(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
                  : t.bi_valid >= 8 &&
                    ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
                    (t.bi_buf >>= 8),
                    (t.bi_valid -= 8));
              }
              function o(t, e) {
                var a,
                  n,
                  r,
                  i,
                  s,
                  h,
                  _ = e.dyn_tree,
                  l = e.max_code,
                  o = e.stat_desc.static_tree,
                  d = e.stat_desc.has_stree,
                  u = e.stat_desc.extra_bits,
                  f = e.stat_desc.extra_base,
                  c = e.stat_desc.max_length,
                  g = 0;
                for (i = 0; i <= N; i++) t.bl_count[i] = 0;
                for (
                  _[2 * t.heap[t.heap_max] + 1] = 0, a = t.heap_max + 1;
                  a < M;
                  a++
                )
                  (n = t.heap[a]),
                    (i = _[2 * _[2 * n + 1] + 1] + 1),
                    i > c && ((i = c), g++),
                    (_[2 * n + 1] = i),
                    n > l ||
                      (t.bl_count[i]++,
                      (s = 0),
                      n >= f && (s = u[n - f]),
                      (h = _[2 * n]),
                      (t.opt_len += h * (i + s)),
                      d && (t.static_len += h * (o[2 * n + 1] + s)));
                if (0 !== g) {
                  do {
                    for (i = c - 1; 0 === t.bl_count[i]; ) i--;
                    t.bl_count[i]--,
                      (t.bl_count[i + 1] += 2),
                      t.bl_count[c]--,
                      (g -= 2);
                  } while (g > 0);
                  for (i = c; 0 !== i; i--)
                    for (n = t.bl_count[i]; 0 !== n; )
                      (r = t.heap[--a]),
                        r > l ||
                          (_[2 * r + 1] !== i &&
                            ((t.opt_len += (i - _[2 * r + 1]) * _[2 * r]),
                            (_[2 * r + 1] = i)),
                          n--);
                }
              }
              function d(t, e, a) {
                var n,
                  r,
                  i = new Array(N + 1),
                  s = 0;
                for (n = 1; n <= N; n++) i[n] = s = (s + a[n - 1]) << 1;
                for (r = 0; r <= e; r++) {
                  var h = t[2 * r + 1];
                  0 !== h && (t[2 * r] = _(i[h]++, h));
                }
              }
              function u() {
                var t,
                  a,
                  n,
                  r,
                  i,
                  s = new Array(N + 1);
                for (n = 0, r = 0; r < q - 1; r++)
                  for (ht[r] = n, t = 0; t < 1 << Z[r]; t++) st[n++] = r;
                for (st[n - 1] = r, i = 0, r = 0; r < 16; r++)
                  for (_t[r] = i, t = 0; t < 1 << $[r]; t++) it[i++] = r;
                for (i >>= 7; r < J; r++)
                  for (_t[r] = i << 7, t = 0; t < 1 << ($[r] - 7); t++)
                    it[256 + i++] = r;
                for (a = 0; a <= N; a++) s[a] = 0;
                for (t = 0; t <= 143; ) (nt[2 * t + 1] = 8), t++, s[8]++;
                for (; t <= 255; ) (nt[2 * t + 1] = 9), t++, s[9]++;
                for (; t <= 279; ) (nt[2 * t + 1] = 7), t++, s[7]++;
                for (; t <= 287; ) (nt[2 * t + 1] = 8), t++, s[8]++;
                for (d(nt, G + 1, s), t = 0; t < J; t++)
                  (rt[2 * t + 1] = 5), (rt[2 * t] = _(t, 5));
                (lt = new e(nt, Z, F + 1, G, N)),
                  (ot = new e(rt, $, 0, J, N)),
                  (dt = new e(new Array(0), tt, 0, K, R));
              }
              function f(t) {
                var e;
                for (e = 0; e < G; e++) t.dyn_ltree[2 * e] = 0;
                for (e = 0; e < J; e++) t.dyn_dtree[2 * e] = 0;
                for (e = 0; e < K; e++) t.bl_tree[2 * e] = 0;
                (t.dyn_ltree[2 * V] = 1),
                  (t.opt_len = t.static_len = 0),
                  (t.last_lit = t.matches = 0);
              }
              function c(t) {
                t.bi_valid > 8
                  ? i(t, t.bi_buf)
                  : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
                  (t.bi_buf = 0),
                  (t.bi_valid = 0);
              }
              function g(t, e, a, n) {
                c(t),
                  n && (i(t, a), i(t, ~a)),
                  r.arraySet(t.pending_buf, t.window, e, a, t.pending),
                  (t.pending += a);
              }
              function p(t, e, a, n) {
                var r = 2 * e,
                  i = 2 * a;
                return t[r] < t[i] || (t[r] === t[i] && n[e] <= n[a]);
              }
              function b(t, e, a) {
                for (
                  var n = t.heap[a], r = a << 1;
                  r <= t.heap_len &&
                  (r < t.heap_len &&
                    p(e, t.heap[r + 1], t.heap[r], t.depth) &&
                    r++,
                  !p(e, n, t.heap[r], t.depth));

                )
                  (t.heap[a] = t.heap[r]), (a = r), (r <<= 1);
                t.heap[a] = n;
              }
              function w(t, e, a) {
                var r,
                  i,
                  _,
                  l,
                  o = 0;
                if (0 !== t.last_lit)
                  do
                    (r =
                      (t.pending_buf[t.d_buf + 2 * o] << 8) |
                      t.pending_buf[t.d_buf + 2 * o + 1]),
                      (i = t.pending_buf[t.l_buf + o]),
                      o++,
                      0 === r
                        ? h(t, i, e)
                        : ((_ = st[i]),
                          h(t, _ + F + 1, e),
                          (l = Z[_]),
                          0 !== l && ((i -= ht[_]), s(t, i, l)),
                          r--,
                          (_ = n(r)),
                          h(t, _, a),
                          (l = $[_]),
                          0 !== l && ((r -= _t[_]), s(t, r, l)));
                  while (o < t.last_lit);
                h(t, V, e);
              }
              function v(t, e) {
                var a,
                  n,
                  r,
                  i = e.dyn_tree,
                  s = e.stat_desc.static_tree,
                  h = e.stat_desc.has_stree,
                  _ = e.stat_desc.elems,
                  l = -1;
                for (t.heap_len = 0, t.heap_max = M, a = 0; a < _; a++)
                  0 !== i[2 * a]
                    ? ((t.heap[++t.heap_len] = l = a), (t.depth[a] = 0))
                    : (i[2 * a + 1] = 0);
                for (; t.heap_len < 2; )
                  (r = t.heap[++t.heap_len] = l < 2 ? ++l : 0),
                    (i[2 * r] = 1),
                    (t.depth[r] = 0),
                    t.opt_len--,
                    h && (t.static_len -= s[2 * r + 1]);
                for (e.max_code = l, a = t.heap_len >> 1; a >= 1; a--)
                  b(t, i, a);
                r = _;
                do
                  (a = t.heap[1]),
                    (t.heap[1] = t.heap[t.heap_len--]),
                    b(t, i, 1),
                    (n = t.heap[1]),
                    (t.heap[--t.heap_max] = a),
                    (t.heap[--t.heap_max] = n),
                    (i[2 * r] = i[2 * a] + i[2 * n]),
                    (t.depth[r] =
                      (t.depth[a] >= t.depth[n] ? t.depth[a] : t.depth[n]) + 1),
                    (i[2 * a + 1] = i[2 * n + 1] = r),
                    (t.heap[1] = r++),
                    b(t, i, 1);
                while (t.heap_len >= 2);
                (t.heap[--t.heap_max] = t.heap[1]),
                  o(t, e),
                  d(i, l, t.bl_count);
              }
              function m(t, e, a) {
                var n,
                  r,
                  i = -1,
                  s = e[1],
                  h = 0,
                  _ = 7,
                  l = 4;
                for (
                  0 === s && ((_ = 138), (l = 3)),
                    e[2 * (a + 1) + 1] = 65535,
                    n = 0;
                  n <= a;
                  n++
                )
                  (r = s),
                    (s = e[2 * (n + 1) + 1]),
                    (++h < _ && r === s) ||
                      (h < l
                        ? (t.bl_tree[2 * r] += h)
                        : 0 !== r
                        ? (r !== i && t.bl_tree[2 * r]++, t.bl_tree[2 * W]++)
                        : h <= 10
                        ? t.bl_tree[2 * X]++
                        : t.bl_tree[2 * Y]++,
                      (h = 0),
                      (i = r),
                      0 === s
                        ? ((_ = 138), (l = 3))
                        : r === s
                        ? ((_ = 6), (l = 3))
                        : ((_ = 7), (l = 4)));
              }
              function k(t, e, a) {
                var n,
                  r,
                  i = -1,
                  _ = e[1],
                  l = 0,
                  o = 7,
                  d = 4;
                for (0 === _ && ((o = 138), (d = 3)), n = 0; n <= a; n++)
                  if (
                    ((r = _), (_ = e[2 * (n + 1) + 1]), !(++l < o && r === _))
                  ) {
                    if (l < d) {
                      do h(t, r, t.bl_tree);
                      while (0 !== --l);
                    } else
                      0 !== r
                        ? (r !== i && (h(t, r, t.bl_tree), l--),
                          h(t, W, t.bl_tree),
                          s(t, l - 3, 2))
                        : l <= 10
                        ? (h(t, X, t.bl_tree), s(t, l - 3, 3))
                        : (h(t, Y, t.bl_tree), s(t, l - 11, 7));
                    (l = 0),
                      (i = r),
                      0 === _
                        ? ((o = 138), (d = 3))
                        : r === _
                        ? ((o = 6), (d = 3))
                        : ((o = 7), (d = 4));
                  }
              }
              function y(t) {
                var e;
                for (
                  m(t, t.dyn_ltree, t.l_desc.max_code),
                    m(t, t.dyn_dtree, t.d_desc.max_code),
                    v(t, t.bl_desc),
                    e = K - 1;
                  e >= 3 && 0 === t.bl_tree[2 * et[e] + 1];
                  e--
                );
                return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
              }
              function z(t, e, a, n) {
                var r;
                for (
                  s(t, e - 257, 5), s(t, a - 1, 5), s(t, n - 4, 4), r = 0;
                  r < n;
                  r++
                )
                  s(t, t.bl_tree[2 * et[r] + 1], 3);
                k(t, t.dyn_ltree, e - 1), k(t, t.dyn_dtree, a - 1);
              }
              function x(t) {
                var e,
                  a = 4093624447;
                for (e = 0; e <= 31; e++, a >>>= 1)
                  if (1 & a && 0 !== t.dyn_ltree[2 * e]) return U;
                if (
                  0 !== t.dyn_ltree[18] ||
                  0 !== t.dyn_ltree[20] ||
                  0 !== t.dyn_ltree[26]
                )
                  return D;
                for (e = 32; e < F; e++) if (0 !== t.dyn_ltree[2 * e]) return D;
                return U;
              }
              function B(t) {
                ut || (u(), (ut = !0)),
                  (t.l_desc = new a(t.dyn_ltree, lt)),
                  (t.d_desc = new a(t.dyn_dtree, ot)),
                  (t.bl_desc = new a(t.bl_tree, dt)),
                  (t.bi_buf = 0),
                  (t.bi_valid = 0),
                  f(t);
              }
              function A(t, e, a, n) {
                s(t, (I << 1) + (n ? 1 : 0), 3), g(t, e, a, !0);
              }
              function S(t) {
                s(t, L << 1, 3), h(t, V, nt), l(t);
              }
              function C(t, e, a, n) {
                var r,
                  i,
                  h = 0;
                t.level > 0
                  ? (t.strm.data_type === H && (t.strm.data_type = x(t)),
                    v(t, t.l_desc),
                    v(t, t.d_desc),
                    (h = y(t)),
                    (r = (t.opt_len + 3 + 7) >>> 3),
                    (i = (t.static_len + 3 + 7) >>> 3),
                    i <= r && (r = i))
                  : (r = i = a + 5),
                  a + 4 <= r && e !== -1
                    ? A(t, e, a, n)
                    : t.strategy === j || i === r
                    ? (s(t, (L << 1) + (n ? 1 : 0), 3), w(t, nt, rt))
                    : (s(t, (O << 1) + (n ? 1 : 0), 3),
                      z(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, h + 1),
                      w(t, t.dyn_ltree, t.dyn_dtree)),
                  f(t),
                  n && c(t);
              }
              function E(t, e, a) {
                return (
                  (t.pending_buf[t.d_buf + 2 * t.last_lit] = (e >>> 8) & 255),
                  (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e),
                  (t.pending_buf[t.l_buf + t.last_lit] = 255 & a),
                  t.last_lit++,
                  0 === e
                    ? t.dyn_ltree[2 * a]++
                    : (t.matches++,
                      e--,
                      t.dyn_ltree[2 * (st[a] + F + 1)]++,
                      t.dyn_dtree[2 * n(e)]++),
                  t.last_lit === t.lit_bufsize - 1
                );
              }
              var j = 4,
                U = 0,
                D = 1,
                H = 2,
                I = 0,
                L = 1,
                O = 2,
                P = 3,
                T = 258,
                q = 29,
                F = 256,
                G = F + 1 + q,
                J = 30,
                K = 19,
                M = 2 * G + 1,
                N = 15,
                Q = 16,
                R = 7,
                V = 256,
                W = 16,
                X = 17,
                Y = 18,
                Z = [
                  0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4,
                  4, 4, 4, 5, 5, 5, 5, 0,
                ],
                $ = [
                  0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9,
                  9, 10, 10, 11, 11, 12, 12, 13, 13,
                ],
                tt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                et = [
                  16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                  15,
                ],
                at = 512,
                nt = new Array(2 * (G + 2));
              t(nt);
              var rt = new Array(2 * J);
              t(rt);
              var it = new Array(at);
              t(it);
              var st = new Array(T - P + 1);
              t(st);
              var ht = new Array(q);
              t(ht);
              var _t = new Array(J);
              t(_t);
              var lt,
                ot,
                dt,
                ut = !1;
              return {
                _tr_init: B,
                _tr_stored_block: A,
                _tr_align: S,
                _tr_flush_block: C,
                _tr_tally: E,
              };
            })(),
            h = (function () {
              function t(t, e) {
                return (t.msg = a[e]), e;
              }
              function i(t) {
                return (t << 1) - (t > 4 ? 9 : 0);
              }
              function h(t) {
                for (var e = t.length; --e >= 0; ) t[e] = 0;
              }
              function _(t) {
                var e = t.state,
                  a = e.pending;
                a > t.avail_out && (a = t.avail_out),
                  0 !== a &&
                    (r.arraySet(
                      t.output,
                      e.pending_buf,
                      e.pending_out,
                      a,
                      t.next_out
                    ),
                    (t.next_out += a),
                    (e.pending_out += a),
                    (t.total_out += a),
                    (t.avail_out -= a),
                    (e.pending -= a),
                    0 === e.pending && (e.pending_out = 0));
              }
              function l(t, e) {
                s._tr_flush_block(
                  t,
                  t.block_start >= 0 ? t.block_start : -1,
                  t.strstart - t.block_start,
                  e
                ),
                  (t.block_start = t.strstart),
                  _(t.strm);
              }
              function o(t, e) {
                t.pending_buf[t.pending++] = e;
              }
              function d(t, e) {
                (t.pending_buf[t.pending++] = (e >>> 8) & 255),
                  (t.pending_buf[t.pending++] = 255 & e);
              }
              function u(t, a, i, s) {
                var h = t.avail_in;
                return (
                  h > s && (h = s),
                  0 === h
                    ? 0
                    : ((t.avail_in -= h),
                      r.arraySet(a, t.input, t.next_in, h, i),
                      1 === t.state.wrap
                        ? (t.adler = e(t.adler, a, h, i))
                        : 2 === t.state.wrap && (t.adler = n(t.adler, a, h, i)),
                      (t.next_in += h),
                      (t.total_in += h),
                      h)
                );
              }
              function f(t, e) {
                var a,
                  n,
                  r = t.max_chain_length,
                  i = t.strstart,
                  s = t.prev_length,
                  h = t.nice_match,
                  _ =
                    t.strstart > t.w_size - rt
                      ? t.strstart - (t.w_size - rt)
                      : 0,
                  l = t.window,
                  o = t.w_mask,
                  d = t.prev,
                  u = t.strstart + nt,
                  f = l[i + s - 1],
                  c = l[i + s];
                t.prev_length >= t.good_match && (r >>= 2),
                  h > t.lookahead && (h = t.lookahead);
                do
                  if (
                    ((a = e),
                    l[a + s] === c &&
                      l[a + s - 1] === f &&
                      l[a] === l[i] &&
                      l[++a] === l[i + 1])
                  ) {
                    (i += 2), a++;
                    do;
                    while (
                      l[++i] === l[++a] &&
                      l[++i] === l[++a] &&
                      l[++i] === l[++a] &&
                      l[++i] === l[++a] &&
                      l[++i] === l[++a] &&
                      l[++i] === l[++a] &&
                      l[++i] === l[++a] &&
                      l[++i] === l[++a] &&
                      i < u
                    );
                    if (((n = nt - (u - i)), (i = u - nt), n > s)) {
                      if (((t.match_start = e), (s = n), n >= h)) break;
                      (f = l[i + s - 1]), (c = l[i + s]);
                    }
                  }
                while ((e = d[e & o]) > _ && 0 !== --r);
                return s <= t.lookahead ? s : t.lookahead;
              }
              function c(t) {
                var e,
                  a,
                  n,
                  i,
                  s,
                  h = t.w_size;
                do {
                  if (
                    ((i = t.window_size - t.lookahead - t.strstart),
                    t.strstart >= h + (h - rt))
                  ) {
                    r.arraySet(t.window, t.window, h, h, 0),
                      (t.match_start -= h),
                      (t.strstart -= h),
                      (t.block_start -= h),
                      (a = t.hash_size),
                      (e = a);
                    do (n = t.head[--e]), (t.head[e] = n >= h ? n - h : 0);
                    while (--a);
                    (a = h), (e = a);
                    do (n = t.prev[--e]), (t.prev[e] = n >= h ? n - h : 0);
                    while (--a);
                    i += h;
                  }
                  if (0 === t.strm.avail_in) break;
                  if (
                    ((a = u(t.strm, t.window, t.strstart + t.lookahead, i)),
                    (t.lookahead += a),
                    t.lookahead + t.insert >= at)
                  )
                    for (
                      s = t.strstart - t.insert,
                        t.ins_h = t.window[s],
                        t.ins_h =
                          ((t.ins_h << t.hash_shift) ^ t.window[s + 1]) &
                          t.hash_mask;
                      t.insert &&
                      ((t.ins_h =
                        ((t.ins_h << t.hash_shift) ^ t.window[s + at - 1]) &
                        t.hash_mask),
                      (t.prev[s & t.w_mask] = t.head[t.ins_h]),
                      (t.head[t.ins_h] = s),
                      s++,
                      t.insert--,
                      !(t.lookahead + t.insert < at));

                    );
                } while (t.lookahead < rt && 0 !== t.strm.avail_in);
              }
              function g(t, e) {
                var a = 65535;
                for (
                  a > t.pending_buf_size - 5 && (a = t.pending_buf_size - 5);
                  ;

                ) {
                  if (t.lookahead <= 1) {
                    if ((c(t), 0 === t.lookahead && e === U)) return ft;
                    if (0 === t.lookahead) break;
                  }
                  (t.strstart += t.lookahead), (t.lookahead = 0);
                  var n = t.block_start + a;
                  if (
                    (0 === t.strstart || t.strstart >= n) &&
                    ((t.lookahead = t.strstart - n),
                    (t.strstart = n),
                    l(t, !1),
                    0 === t.strm.avail_out)
                  )
                    return ft;
                  if (
                    t.strstart - t.block_start >= t.w_size - rt &&
                    (l(t, !1), 0 === t.strm.avail_out)
                  )
                    return ft;
                }
                return (
                  (t.insert = 0),
                  e === I
                    ? (l(t, !0), 0 === t.strm.avail_out ? gt : pt)
                    : t.strstart > t.block_start &&
                      (l(t, !1), 0 === t.strm.avail_out)
                    ? ft
                    : ft
                );
              }
              function p(t, e) {
                for (var a, n; ; ) {
                  if (t.lookahead < rt) {
                    if ((c(t), t.lookahead < rt && e === U)) return ft;
                    if (0 === t.lookahead) break;
                  }
                  if (
                    ((a = 0),
                    t.lookahead >= at &&
                      ((t.ins_h =
                        ((t.ins_h << t.hash_shift) ^
                          t.window[t.strstart + at - 1]) &
                        t.hash_mask),
                      (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                      (t.head[t.ins_h] = t.strstart)),
                    0 !== a &&
                      t.strstart - a <= t.w_size - rt &&
                      (t.match_length = f(t, a)),
                    t.match_length >= at)
                  )
                    if (
                      ((n = s._tr_tally(
                        t,
                        t.strstart - t.match_start,
                        t.match_length - at
                      )),
                      (t.lookahead -= t.match_length),
                      t.match_length <= t.max_lazy_match && t.lookahead >= at)
                    ) {
                      t.match_length--;
                      do
                        t.strstart++,
                          (t.ins_h =
                            ((t.ins_h << t.hash_shift) ^
                              t.window[t.strstart + at - 1]) &
                            t.hash_mask),
                          (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                          (t.head[t.ins_h] = t.strstart);
                      while (0 !== --t.match_length);
                      t.strstart++;
                    } else
                      (t.strstart += t.match_length),
                        (t.match_length = 0),
                        (t.ins_h = t.window[t.strstart]),
                        (t.ins_h =
                          ((t.ins_h << t.hash_shift) ^
                            t.window[t.strstart + 1]) &
                          t.hash_mask);
                  else
                    (n = s._tr_tally(t, 0, t.window[t.strstart])),
                      t.lookahead--,
                      t.strstart++;
                  if (n && (l(t, !1), 0 === t.strm.avail_out)) return ft;
                }
                return (
                  (t.insert = t.strstart < at - 1 ? t.strstart : at - 1),
                  e === I
                    ? (l(t, !0), 0 === t.strm.avail_out ? gt : pt)
                    : t.last_lit && (l(t, !1), 0 === t.strm.avail_out)
                    ? ft
                    : ct
                );
              }
              function b(t, e) {
                for (var a, n, r; ; ) {
                  if (t.lookahead < rt) {
                    if ((c(t), t.lookahead < rt && e === U)) return ft;
                    if (0 === t.lookahead) break;
                  }
                  if (
                    ((a = 0),
                    t.lookahead >= at &&
                      ((t.ins_h =
                        ((t.ins_h << t.hash_shift) ^
                          t.window[t.strstart + at - 1]) &
                        t.hash_mask),
                      (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                      (t.head[t.ins_h] = t.strstart)),
                    (t.prev_length = t.match_length),
                    (t.prev_match = t.match_start),
                    (t.match_length = at - 1),
                    0 !== a &&
                      t.prev_length < t.max_lazy_match &&
                      t.strstart - a <= t.w_size - rt &&
                      ((t.match_length = f(t, a)),
                      t.match_length <= 5 &&
                        (t.strategy === J ||
                          (t.match_length === at &&
                            t.strstart - t.match_start > 4096)) &&
                        (t.match_length = at - 1)),
                    t.prev_length >= at && t.match_length <= t.prev_length)
                  ) {
                    (r = t.strstart + t.lookahead - at),
                      (n = s._tr_tally(
                        t,
                        t.strstart - 1 - t.prev_match,
                        t.prev_length - at
                      )),
                      (t.lookahead -= t.prev_length - 1),
                      (t.prev_length -= 2);
                    do
                      ++t.strstart <= r &&
                        ((t.ins_h =
                          ((t.ins_h << t.hash_shift) ^
                            t.window[t.strstart + at - 1]) &
                          t.hash_mask),
                        (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                        (t.head[t.ins_h] = t.strstart));
                    while (0 !== --t.prev_length);
                    if (
                      ((t.match_available = 0),
                      (t.match_length = at - 1),
                      t.strstart++,
                      n && (l(t, !1), 0 === t.strm.avail_out))
                    )
                      return ft;
                  } else if (t.match_available) {
                    if (
                      ((n = s._tr_tally(t, 0, t.window[t.strstart - 1])),
                      n && l(t, !1),
                      t.strstart++,
                      t.lookahead--,
                      0 === t.strm.avail_out)
                    )
                      return ft;
                  } else (t.match_available = 1), t.strstart++, t.lookahead--;
                }
                return (
                  t.match_available &&
                    ((n = s._tr_tally(t, 0, t.window[t.strstart - 1])),
                    (t.match_available = 0)),
                  (t.insert = t.strstart < at - 1 ? t.strstart : at - 1),
                  e === I
                    ? (l(t, !0), 0 === t.strm.avail_out ? gt : pt)
                    : t.last_lit && (l(t, !1), 0 === t.strm.avail_out)
                    ? ft
                    : ct
                );
              }
              function w(t, e) {
                for (var a, n, r, i, h = t.window; ; ) {
                  if (t.lookahead <= nt) {
                    if ((c(t), t.lookahead <= nt && e === U)) return ft;
                    if (0 === t.lookahead) break;
                  }
                  if (
                    ((t.match_length = 0),
                    t.lookahead >= at &&
                      t.strstart > 0 &&
                      ((r = t.strstart - 1),
                      (n = h[r]),
                      n === h[++r] && n === h[++r] && n === h[++r]))
                  ) {
                    i = t.strstart + nt;
                    do;
                    while (
                      n === h[++r] &&
                      n === h[++r] &&
                      n === h[++r] &&
                      n === h[++r] &&
                      n === h[++r] &&
                      n === h[++r] &&
                      n === h[++r] &&
                      n === h[++r] &&
                      r < i
                    );
                    (t.match_length = nt - (i - r)),
                      t.match_length > t.lookahead &&
                        (t.match_length = t.lookahead);
                  }
                  if (
                    (t.match_length >= at
                      ? ((a = s._tr_tally(t, 1, t.match_length - at)),
                        (t.lookahead -= t.match_length),
                        (t.strstart += t.match_length),
                        (t.match_length = 0))
                      : ((a = s._tr_tally(t, 0, t.window[t.strstart])),
                        t.lookahead--,
                        t.strstart++),
                    a && (l(t, !1), 0 === t.strm.avail_out))
                  )
                    return ft;
                }
                return (
                  (t.insert = 0),
                  e === I
                    ? (l(t, !0), 0 === t.strm.avail_out ? gt : pt)
                    : t.last_lit && (l(t, !1), 0 === t.strm.avail_out)
                    ? ft
                    : ct
                );
              }
              function v(t, e) {
                for (var a; ; ) {
                  if (0 === t.lookahead && (c(t), 0 === t.lookahead)) {
                    if (e === U) return ft;
                    break;
                  }
                  if (
                    ((t.match_length = 0),
                    (a = s._tr_tally(t, 0, t.window[t.strstart])),
                    t.lookahead--,
                    t.strstart++,
                    a && (l(t, !1), 0 === t.strm.avail_out))
                  )
                    return ft;
                }
                return (
                  (t.insert = 0),
                  e === I
                    ? (l(t, !0), 0 === t.strm.avail_out ? gt : pt)
                    : t.last_lit && (l(t, !1), 0 === t.strm.avail_out)
                    ? ft
                    : ct
                );
              }
              function m(t, e, a, n, r) {
                (this.good_length = t),
                  (this.max_lazy = e),
                  (this.nice_length = a),
                  (this.max_chain = n),
                  (this.func = r);
              }
              function k(t) {
                (t.window_size = 2 * t.w_size),
                  h(t.head),
                  (t.max_lazy_match = j[t.level].max_lazy),
                  (t.good_match = j[t.level].good_length),
                  (t.nice_match = j[t.level].nice_length),
                  (t.max_chain_length = j[t.level].max_chain),
                  (t.strstart = 0),
                  (t.block_start = 0),
                  (t.lookahead = 0),
                  (t.insert = 0),
                  (t.match_length = t.prev_length = at - 1),
                  (t.match_available = 0),
                  (t.ins_h = 0);
              }
              function y() {
                (this.strm = null),
                  (this.status = 0),
                  (this.pending_buf = null),
                  (this.pending_buf_size = 0),
                  (this.pending_out = 0),
                  (this.pending = 0),
                  (this.wrap = 0),
                  (this.gzhead = null),
                  (this.gzindex = 0),
                  (this.method = R),
                  (this.last_flush = -1),
                  (this.w_size = 0),
                  (this.w_bits = 0),
                  (this.w_mask = 0),
                  (this.window = null),
                  (this.window_size = 0),
                  (this.prev = null),
                  (this.head = null),
                  (this.ins_h = 0),
                  (this.hash_size = 0),
                  (this.hash_bits = 0),
                  (this.hash_mask = 0),
                  (this.hash_shift = 0),
                  (this.block_start = 0),
                  (this.match_length = 0),
                  (this.prev_match = 0),
                  (this.match_available = 0),
                  (this.strstart = 0),
                  (this.match_start = 0),
                  (this.lookahead = 0),
                  (this.prev_length = 0),
                  (this.max_chain_length = 0),
                  (this.max_lazy_match = 0),
                  (this.level = 0),
                  (this.strategy = 0),
                  (this.good_match = 0),
                  (this.nice_match = 0),
                  (this.dyn_ltree = new r.Buf16(2 * tt)),
                  (this.dyn_dtree = new r.Buf16(2 * (2 * Z + 1))),
                  (this.bl_tree = new r.Buf16(2 * (2 * $ + 1))),
                  h(this.dyn_ltree),
                  h(this.dyn_dtree),
                  h(this.bl_tree),
                  (this.l_desc = null),
                  (this.d_desc = null),
                  (this.bl_desc = null),
                  (this.bl_count = new r.Buf16(et + 1)),
                  (this.heap = new r.Buf16(2 * Y + 1)),
                  h(this.heap),
                  (this.heap_len = 0),
                  (this.heap_max = 0),
                  (this.depth = new r.Buf16(2 * Y + 1)),
                  h(this.depth),
                  (this.l_buf = 0),
                  (this.lit_bufsize = 0),
                  (this.last_lit = 0),
                  (this.d_buf = 0),
                  (this.opt_len = 0),
                  (this.static_len = 0),
                  (this.matches = 0),
                  (this.insert = 0),
                  (this.bi_buf = 0),
                  (this.bi_valid = 0);
              }
              function z(e) {
                var a;
                return e && e.state
                  ? ((e.total_in = e.total_out = 0),
                    (e.data_type = Q),
                    (a = e.state),
                    (a.pending = 0),
                    (a.pending_out = 0),
                    a.wrap < 0 && (a.wrap = -a.wrap),
                    (a.status = a.wrap ? st : dt),
                    (e.adler = 2 === a.wrap ? 0 : 1),
                    (a.last_flush = U),
                    s._tr_init(a),
                    O)
                  : t(e, T);
              }
              function x(t) {
                var e = z(t);
                return e === O && k(t.state), e;
              }
              function B(t, e) {
                return t && t.state
                  ? 2 !== t.state.wrap
                    ? T
                    : ((t.state.gzhead = e), O)
                  : T;
              }
              function A(e, a, n, i, s, h) {
                if (!e) return T;
                var _ = 1;
                if (
                  (a === G && (a = 6),
                  i < 0 ? ((_ = 0), (i = -i)) : i > 15 && ((_ = 2), (i -= 16)),
                  s < 1 ||
                    s > V ||
                    n !== R ||
                    i < 8 ||
                    i > 15 ||
                    a < 0 ||
                    a > 9 ||
                    h < 0 ||
                    h > N)
                )
                  return t(e, T);
                8 === i && (i = 9);
                var l = new y();
                return (
                  (e.state = l),
                  (l.strm = e),
                  (l.wrap = _),
                  (l.gzhead = null),
                  (l.w_bits = i),
                  (l.w_size = 1 << l.w_bits),
                  (l.w_mask = l.w_size - 1),
                  (l.hash_bits = s + 7),
                  (l.hash_size = 1 << l.hash_bits),
                  (l.hash_mask = l.hash_size - 1),
                  (l.hash_shift = ~~((l.hash_bits + at - 1) / at)),
                  (l.window = new r.Buf8(2 * l.w_size)),
                  (l.head = new r.Buf16(l.hash_size)),
                  (l.prev = new r.Buf16(l.w_size)),
                  (l.lit_bufsize = 1 << (s + 6)),
                  (l.pending_buf_size = 4 * l.lit_bufsize),
                  (l.pending_buf = new r.Buf8(l.pending_buf_size)),
                  (l.d_buf = 1 * l.lit_bufsize),
                  (l.l_buf = 3 * l.lit_bufsize),
                  (l.level = a),
                  (l.strategy = h),
                  (l.method = n),
                  x(e)
                );
              }
              function S(e, a) {
                var r, l, u, f;
                if (!e || !e.state || a > L || a < 0) return e ? t(e, T) : T;
                if (
                  ((l = e.state),
                  !e.output ||
                    (!e.input && 0 !== e.avail_in) ||
                    (l.status === ut && a !== I))
                )
                  return t(e, 0 === e.avail_out ? F : T);
                if (
                  ((l.strm = e),
                  (r = l.last_flush),
                  (l.last_flush = a),
                  l.status === st)
                )
                  if (2 === l.wrap)
                    (e.adler = 0),
                      o(l, 31),
                      o(l, 139),
                      o(l, 8),
                      l.gzhead
                        ? (o(
                            l,
                            (l.gzhead.text ? 1 : 0) +
                              (l.gzhead.hcrc ? 2 : 0) +
                              (l.gzhead.extra ? 4 : 0) +
                              (l.gzhead.name ? 8 : 0) +
                              (l.gzhead.comment ? 16 : 0)
                          ),
                          o(l, 255 & l.gzhead.time),
                          o(l, (l.gzhead.time >> 8) & 255),
                          o(l, (l.gzhead.time >> 16) & 255),
                          o(l, (l.gzhead.time >> 24) & 255),
                          o(
                            l,
                            9 === l.level
                              ? 2
                              : l.strategy >= K || l.level < 2
                              ? 4
                              : 0
                          ),
                          o(l, 255 & l.gzhead.os),
                          l.gzhead.extra &&
                            l.gzhead.extra.length &&
                            (o(l, 255 & l.gzhead.extra.length),
                            o(l, (l.gzhead.extra.length >> 8) & 255)),
                          l.gzhead.hcrc &&
                            (e.adler = n(e.adler, l.pending_buf, l.pending, 0)),
                          (l.gzindex = 0),
                          (l.status = ht))
                        : (o(l, 0),
                          o(l, 0),
                          o(l, 0),
                          o(l, 0),
                          o(l, 0),
                          o(
                            l,
                            9 === l.level
                              ? 2
                              : l.strategy >= K || l.level < 2
                              ? 4
                              : 0
                          ),
                          o(l, bt),
                          (l.status = dt));
                  else {
                    var c = (R + ((l.w_bits - 8) << 4)) << 8,
                      g = -1;
                    (g =
                      l.strategy >= K || l.level < 2
                        ? 0
                        : l.level < 6
                        ? 1
                        : 6 === l.level
                        ? 2
                        : 3),
                      (c |= g << 6),
                      0 !== l.strstart && (c |= it),
                      (c += 31 - (c % 31)),
                      (l.status = dt),
                      d(l, c),
                      0 !== l.strstart &&
                        (d(l, e.adler >>> 16), d(l, 65535 & e.adler)),
                      (e.adler = 1);
                  }
                if (l.status === ht)
                  if (l.gzhead.extra) {
                    for (
                      u = l.pending;
                      l.gzindex < (65535 & l.gzhead.extra.length) &&
                      (l.pending !== l.pending_buf_size ||
                        (l.gzhead.hcrc &&
                          l.pending > u &&
                          (e.adler = n(
                            e.adler,
                            l.pending_buf,
                            l.pending - u,
                            u
                          )),
                        _(e),
                        (u = l.pending),
                        l.pending !== l.pending_buf_size));

                    )
                      o(l, 255 & l.gzhead.extra[l.gzindex]), l.gzindex++;
                    l.gzhead.hcrc &&
                      l.pending > u &&
                      (e.adler = n(e.adler, l.pending_buf, l.pending - u, u)),
                      l.gzindex === l.gzhead.extra.length &&
                        ((l.gzindex = 0), (l.status = _t));
                  } else l.status = _t;
                if (l.status === _t)
                  if (l.gzhead.name) {
                    u = l.pending;
                    do {
                      if (
                        l.pending === l.pending_buf_size &&
                        (l.gzhead.hcrc &&
                          l.pending > u &&
                          (e.adler = n(
                            e.adler,
                            l.pending_buf,
                            l.pending - u,
                            u
                          )),
                        _(e),
                        (u = l.pending),
                        l.pending === l.pending_buf_size)
                      ) {
                        f = 1;
                        break;
                      }
                      (f =
                        l.gzindex < l.gzhead.name.length
                          ? 255 & l.gzhead.name.charCodeAt(l.gzindex++)
                          : 0),
                        o(l, f);
                    } while (0 !== f);
                    l.gzhead.hcrc &&
                      l.pending > u &&
                      (e.adler = n(e.adler, l.pending_buf, l.pending - u, u)),
                      0 === f && ((l.gzindex = 0), (l.status = lt));
                  } else l.status = lt;
                if (l.status === lt)
                  if (l.gzhead.comment) {
                    u = l.pending;
                    do {
                      if (
                        l.pending === l.pending_buf_size &&
                        (l.gzhead.hcrc &&
                          l.pending > u &&
                          (e.adler = n(
                            e.adler,
                            l.pending_buf,
                            l.pending - u,
                            u
                          )),
                        _(e),
                        (u = l.pending),
                        l.pending === l.pending_buf_size)
                      ) {
                        f = 1;
                        break;
                      }
                      (f =
                        l.gzindex < l.gzhead.comment.length
                          ? 255 & l.gzhead.comment.charCodeAt(l.gzindex++)
                          : 0),
                        o(l, f);
                    } while (0 !== f);
                    l.gzhead.hcrc &&
                      l.pending > u &&
                      (e.adler = n(e.adler, l.pending_buf, l.pending - u, u)),
                      0 === f && (l.status = ot);
                  } else l.status = ot;
                if (
                  (l.status === ot &&
                    (l.gzhead.hcrc
                      ? (l.pending + 2 > l.pending_buf_size && _(e),
                        l.pending + 2 <= l.pending_buf_size &&
                          (o(l, 255 & e.adler),
                          o(l, (e.adler >> 8) & 255),
                          (e.adler = 0),
                          (l.status = dt)))
                      : (l.status = dt)),
                  0 !== l.pending)
                ) {
                  if ((_(e), 0 === e.avail_out)) return (l.last_flush = -1), O;
                } else if (0 === e.avail_in && i(a) <= i(r) && a !== I)
                  return t(e, F);
                if (l.status === ut && 0 !== e.avail_in) return t(e, F);
                if (
                  0 !== e.avail_in ||
                  0 !== l.lookahead ||
                  (a !== U && l.status !== ut)
                ) {
                  var p =
                    l.strategy === K
                      ? v(l, a)
                      : l.strategy === M
                      ? w(l, a)
                      : j[l.level].func(l, a);
                  if (
                    ((p !== gt && p !== pt) || (l.status = ut),
                    p === ft || p === gt)
                  )
                    return 0 === e.avail_out && (l.last_flush = -1), O;
                  if (
                    p === ct &&
                    (a === D
                      ? s._tr_align(l)
                      : a !== L &&
                        (s._tr_stored_block(l, 0, 0, !1),
                        a === H &&
                          (h(l.head),
                          0 === l.lookahead &&
                            ((l.strstart = 0),
                            (l.block_start = 0),
                            (l.insert = 0)))),
                    _(e),
                    0 === e.avail_out)
                  )
                    return (l.last_flush = -1), O;
                }
                return a !== I
                  ? O
                  : l.wrap <= 0
                  ? P
                  : (2 === l.wrap
                      ? (o(l, 255 & e.adler),
                        o(l, (e.adler >> 8) & 255),
                        o(l, (e.adler >> 16) & 255),
                        o(l, (e.adler >> 24) & 255),
                        o(l, 255 & e.total_in),
                        o(l, (e.total_in >> 8) & 255),
                        o(l, (e.total_in >> 16) & 255),
                        o(l, (e.total_in >> 24) & 255))
                      : (d(l, e.adler >>> 16), d(l, 65535 & e.adler)),
                    _(e),
                    l.wrap > 0 && (l.wrap = -l.wrap),
                    0 !== l.pending ? O : P);
              }
              function C(e) {
                var a;
                return e && e.state
                  ? ((a = e.state.status),
                    a !== st &&
                    a !== ht &&
                    a !== _t &&
                    a !== lt &&
                    a !== ot &&
                    a !== dt &&
                    a !== ut
                      ? t(e, T)
                      : ((e.state = null), a === dt ? t(e, q) : O))
                  : T;
              }
              function E(t, a) {
                var n,
                  i,
                  s,
                  _,
                  l,
                  o,
                  d,
                  u,
                  f = a.length;
                if (!t || !t.state) return T;
                if (
                  ((n = t.state),
                  (_ = n.wrap),
                  2 === _ || (1 === _ && n.status !== st) || n.lookahead)
                )
                  return T;
                for (
                  1 === _ && (t.adler = e(t.adler, a, f, 0)),
                    n.wrap = 0,
                    f >= n.w_size &&
                      (0 === _ &&
                        (h(n.head),
                        (n.strstart = 0),
                        (n.block_start = 0),
                        (n.insert = 0)),
                      (u = new r.Buf8(n.w_size)),
                      r.arraySet(u, a, f - n.w_size, n.w_size, 0),
                      (a = u),
                      (f = n.w_size)),
                    l = t.avail_in,
                    o = t.next_in,
                    d = t.input,
                    t.avail_in = f,
                    t.next_in = 0,
                    t.input = a,
                    c(n);
                  n.lookahead >= at;

                ) {
                  (i = n.strstart), (s = n.lookahead - (at - 1));
                  do
                    (n.ins_h =
                      ((n.ins_h << n.hash_shift) ^ n.window[i + at - 1]) &
                      n.hash_mask),
                      (n.prev[i & n.w_mask] = n.head[n.ins_h]),
                      (n.head[n.ins_h] = i),
                      i++;
                  while (--s);
                  (n.strstart = i), (n.lookahead = at - 1), c(n);
                }
                return (
                  (n.strstart += n.lookahead),
                  (n.block_start = n.strstart),
                  (n.insert = n.lookahead),
                  (n.lookahead = 0),
                  (n.match_length = n.prev_length = at - 1),
                  (n.match_available = 0),
                  (t.next_in = o),
                  (t.input = d),
                  (t.avail_in = l),
                  (n.wrap = _),
                  O
                );
              }
              var j,
                U = 0,
                D = 1,
                H = 3,
                I = 4,
                L = 5,
                O = 0,
                P = 1,
                T = -2,
                q = -3,
                F = -5,
                G = -1,
                J = 1,
                K = 2,
                M = 3,
                N = 4,
                Q = 2,
                R = 8,
                V = 9,
                W = 29,
                X = 256,
                Y = X + 1 + W,
                Z = 30,
                $ = 19,
                tt = 2 * Y + 1,
                et = 15,
                at = 3,
                nt = 258,
                rt = nt + at + 1,
                it = 32,
                st = 42,
                ht = 69,
                _t = 73,
                lt = 91,
                ot = 103,
                dt = 113,
                ut = 666,
                ft = 1,
                ct = 2,
                gt = 3,
                pt = 4,
                bt = 3;
              return (
                (j = [
                  new m(0, 0, 0, 0, g),
                  new m(4, 4, 8, 4, p),
                  new m(4, 5, 16, 8, p),
                  new m(4, 6, 32, 32, p),
                  new m(4, 4, 16, 16, b),
                  new m(8, 16, 32, 32, b),
                  new m(8, 16, 128, 128, b),
                  new m(8, 32, 128, 256, b),
                  new m(32, 128, 258, 1024, b),
                  new m(32, 258, 258, 4096, b),
                ]),
                {
                  deflateInit2: A,
                  deflateSetHeader: B,
                  deflate: S,
                  deflateEnd: C,
                  deflateSetDictionary: E,
                }
              );
            })(),
            _ = (function () {
              function e(n) {
                if (!(this instanceof e)) return new e(n);
                this.options = r.assign(
                  {
                    level: c,
                    method: p,
                    chunkSize: 16384,
                    windowBits: 15,
                    memLevel: 8,
                    strategy: g,
                    to: "",
                  },
                  n || {}
                );
                var s = this.options;
                s.raw && s.windowBits > 0
                  ? (s.windowBits = -s.windowBits)
                  : s.gzip &&
                    s.windowBits > 0 &&
                    s.windowBits < 16 &&
                    (s.windowBits += 16),
                  (this.err = 0),
                  (this.msg = ""),
                  (this.ended = !1),
                  (this.chunks = []),
                  (this.strm = new t()),
                  (this.strm.avail_out = 0);
                var l = h.deflateInit2(
                  this.strm,
                  s.level,
                  s.method,
                  s.windowBits,
                  s.memLevel,
                  s.strategy
                );
                if (l !== d) throw new Error(a[l]);
                if (
                  (s.header && h.deflateSetHeader(this.strm, s.header),
                  s.dictionary)
                ) {
                  var o;
                  if (
                    ((o =
                      "string" == typeof s.dictionary
                        ? i.string2buf(s.dictionary)
                        : "[object ArrayBuffer]" === _.call(s.dictionary)
                        ? new Uint8Array(s.dictionary)
                        : s.dictionary),
                    (l = h.deflateSetDictionary(this.strm, o)),
                    l !== d)
                  )
                    throw new Error(a[l]);
                  this._dict_set = !0;
                }
              }
              function n(t, n) {
                var r = new e(n);
                if ((r.push(t, !0), r.err)) throw r.msg || a[r.err];
                return r.result;
              }
              function s(t, e) {
                return (e = e || {}), (e.gzip = !0), n(t, e);
              }
              var _ = Object.prototype.toString,
                l = 0,
                o = 4,
                d = 0,
                u = 1,
                f = 2,
                c = -1,
                g = 0,
                p = 8;
              return (
                (e.prototype.push = function (t, e) {
                  var a,
                    n,
                    s = this.strm,
                    c = this.options.chunkSize;
                  if (this.ended) return !1;
                  (n = e === ~~e ? e : e === !0 ? o : l),
                    "string" == typeof t
                      ? (s.input = i.string2buf(t))
                      : "[object ArrayBuffer]" === _.call(t)
                      ? (s.input = new Uint8Array(t))
                      : (s.input = t),
                    (s.next_in = 0),
                    (s.avail_in = s.input.length);
                  do {
                    if (
                      (0 === s.avail_out &&
                        ((s.output = new r.Buf8(c)),
                        (s.next_out = 0),
                        (s.avail_out = c)),
                      (a = h.deflate(s, n)),
                      a !== u && a !== d)
                    )
                      return this.onEnd(a), (this.ended = !0), !1;
                    (0 !== s.avail_out &&
                      (0 !== s.avail_in || (n !== o && n !== f))) ||
                      ("string" === this.options.to
                        ? this.onData(
                            i.buf2binstring(r.shrinkBuf(s.output, s.next_out))
                          )
                        : this.onData(r.shrinkBuf(s.output, s.next_out)));
                  } while ((s.avail_in > 0 || 0 === s.avail_out) && a !== u);
                  return n === o
                    ? ((a = h.deflateEnd(this.strm)),
                      this.onEnd(a),
                      (this.ended = !0),
                      a === d)
                    : n !== f || (this.onEnd(d), (s.avail_out = 0), !0);
                }),
                (e.prototype.onData = function (t) {
                  this.chunks.push(t);
                }),
                (e.prototype.onEnd = function (t) {
                  t === d &&
                    ("string" === this.options.to
                      ? (this.result = this.chunks.join(""))
                      : (this.result = r.flattenChunks(this.chunks))),
                    (this.chunks = []),
                    (this.err = t),
                    (this.msg = this.strm.msg);
                }),
                { gzip: s }
              );
            })();
          return _;
        })();
      }
      _596();
      this.start = function () {
        _42();
        _385(_599());
      };
      this.stop = _64;
      this.newPageView = _781;
      this.stopSession = _780;
      this.getSessionId = function () {
        return _12._51;
      };
      this.getPageViewId = function () {
        return _12._77;
      };
      this.tag = _98;
      this.star = _807;
      this.setVariable = _798;
      this.identify = _815;
      this.formSubmitAttempt = _544;
      this.formSubmitSuccess = _405;
      this.formSubmitFailure = _810;
      this.addFriction = function (_4, _19) {
        _147({ _4: _4, _552: _19 });
      };
      this.isRecording = function () {
        return _182;
      };
      this.isReturningUser = function () {
        return _12._220;
      };
      this.activateFeedback = _393;
      this.proxyAttachShadow = _403;
      this.recordingRate = _188;
      this.version = _219;
    }
    function _543(_7) {
      var _567 = [];
      function _143(_89) {
        if (!_7.domMutationDetectorEnable || !_89 || _89.nodeType !== 1)
          return false;
        var _558 = _89.parentNode ? _89.parentNode.id : undefined;
        var _559 = _89.previousSibling ? _89.previousSibling.id : undefined;
        var _806 = _89.tagName;
        var _560 = _89.attributes ? _89.attributes.id : undefined;
        var _561 = _89.attributes ? _89.attributes.class : undefined;
        var _26 = _806;
        if (_7.domMutationUseParentNode && _558) _26 += "_" + _558;
        if (_7.domMutationUsePreviousSibling && _559) _26 += "_" + _559;
        if (_560) _26 += "_" + _560;
        if (_561) _26 += "_" + _561.replace(/\s/g, "_");
        var _639 = +new Date();
        var _71 = _567[_26];
        var _391 = _71 ? _71._423 : 0;
        var _802 = _71 ? (_639 - _71._801) / 1000 : 0;
        var _563 = _391 < _7.domMutationCountThreshold;
        var _565 = _802 < _7.domMutationTimeThresholdInSeconds;
        var _143 = _71 ? _563 && _565 : false;
        if (!_563 || !_565) _391 = 0;
        _567[_26] = { _801: _639, _423: _391 + 1 };
        return _143;
      }
      this._143 = _143;
    }
    function _709(_2, _7, _109, _9, _18, _170) {
      var _142, _43, _10, _132;
      var _404 = "mf_liveHeatmaps";
      var _31;
      var _206 = [];
      var _402;
      var _251 = false;
      function _42(_414, _415) {
        _43 = _414;
        _10 = _415;
        _251 =
          window.location.search.indexOf("mf_legacy=1") !== -1 ? true : false;
        _10("Live heatmaps starting");
        _132 = _109._260();
        if (!_132) {
          _10(
            "Live heatmaps not initiated - could not create root HTML element"
          );
          return;
        }
        if (!_2.opener) {
          _10("Live heatmaps not initiated - window.opener is missing");
          return;
        }
        _752();
      }
      function _64() {
        _281();
      }
      function _752() {
        _18._24(_2, "message", function (_39) {
          _741(_39.data);
          switch (_39.data.message) {
            case "MouseflowLiveHeatmaps_Init_Received":
              _2.clearInterval(_402);
              break;
            case "MouseflowLiveHeatmaps_Init_Success":
            case "MouseflowLiveHeatmaps_Hello":
              _142 = _39.origin;
              _749(_39.data.minDate, _39.data.filters, _39.data.filteredViews);
              _743(_39.data.scripts, function () {
                var message;
                if (_251) {
                  message = {
                    mfCommand: "settings",
                    value: { websiteSettings: _39.data.websiteSettings },
                  };
                } else {
                  _443();
                  _31.cssSelectorTracked =
                    _39.data.websiteSettings.cssSelectorTracked;
                  message = { mfCommand: "settings_liveheatmap", value: _31 };
                }
                _2.postMessage(JSON.stringify(message), "*");
              });
              break;
            case "MouseflowLiveHeatmaps_StreamData_Chunk":
              _207(_39.data.requestUrl, true)._409(_39.data.dataChunk);
              break;
            case "MouseflowLiveHeatmaps_StreamData_Success":
              _207(_39.data.requestUrl)._121();
              break;
            case "MouseflowLiveHeatmaps_StreamData_Error":
              _207(_39.data.requestUrl)._164();
              break;
            case "MouseflowLiveHeatmaps_RequestData_Success":
              _207(_39.data.requestUrl)._121(_39.data.responseText);
              break;
            case "MouseflowLiveHeatmaps_RequestData_Error":
              _207(_39.data.requestUrl)._164();
              break;
          }
        });
        _402 = _2.setInterval(_628, 500);
        _2.setTimeout(function () {
          _2.clearInterval(_402);
        }, 10000);
        _628();
      }
      function _628() {
        _412({
          message: "MouseflowLiveHeatmaps_Init",
          websiteId: _43,
          legacy: _251,
        });
      }
      function _749(_747, _154, _745) {
        _31 = _614();
        var _223 = _611();
        var _275 = _7.location.search.match(/mf_liveHeatmaps=([^&]+)/);
        var _396 =
          typeof _2.name === "string" &&
          _2.name.indexOf("mf_liveHeatmaps") === 0
            ? _2.name.slice(15).split("_")
            : [];
        var _748 = _275 || _396[1] === "init";
        if (_31 && !_748) {
          _31.filters.url = _223.url;
          _79(_31);
          return;
        }
        _31 = {
          isMinimized: false,
          appUrlBase: _142,
          websiteId: _43,
          filters: _223,
          minDate: _747,
          filteredViews: _745,
        };
        if (_154 && _154.view) {
          _31.selectedFilteredView = _154.view;
          delete _154.view;
        }
        if (_154) {
          Object.keys(_154).forEach(function (_26) {
            var _4 = _154[_26];
            if (_4 instanceof Date) _4 = _265(_4);
            _31.filters[_26] = _4;
          });
        }
        if (_275 && _275[1] !== "1") _31.filters.maptype = _275[1];
        else if (_396[2]) _31.filters.maptype = _396[2];
        _79(_31);
        _2.name = "mf_liveHeatmaps";
      }
      function _443() {
        _31.devices = [_31.filters.device];
        _31.mapType = _31.filters.maptype;
        _31.url = _170._234();
      }
      function _743(_389, _141) {
        if (!_389) return;
        var _384 = 0;
        function _621() {
          if (_384 >= _389.length) {
            _141();
            return;
          }
          var _266 = _389[_384];
          _753(_266);
          _384++;
          var _383 = document.createElement("script");
          _383.src = _142 + _266;
          _383.onload = _621;
          _132.appendChild(_383);
        }
        _621();
      }
      function _614() {
        return _9._146(_2.localStorage.getItem(_404));
      }
      function _79(_31) {
        if (_10) _10("Live heatmaps saving settings");
        _31 = _31 ? _9._69(_31) : "";
        _2.localStorage.setItem(_404, _31);
      }
      function _281() {
        if (_10) _10("Live heatmaps removing settings");
        _2.localStorage.removeItem(_404);
      }
      function _207(_17, _734) {
        var _420 = _206.filter(function (_736) {
          return _736._17 === _17;
        })[0];
        if (!_734 && _420) _206.splice(_206.indexOf(_420), 1);
        return _420;
      }
      function _772(_16) {
        if (typeof _16 !== "object") return;
        _31 = _614();
        var _223 = _611();
        Object.keys(_16).forEach(function (_26) {
          var _4 = _16[_26];
          if (_4 instanceof Date) _4 = _265(_4);
          _31.filters[_26] = _4 || undefined;
        });
        Object.keys(_223).forEach(function (_26) {
          if (!_31.filters[_26]) _31.filters[_26] = _223[_26];
        });
        if (_31.filters.view) {
          _31.selectedFilteredView = _31.filters.view;
          delete _31.filters.view;
        }
        _79(_31);
      }
      function _611() {
        var _197 = new Date();
        _197 = new Date(_197.getFullYear(), _197.getMonth(), _197.getDate());
        var _417 = new Date(_197);
        _417.setDate(_417.getDate() - 29);
        return {
          maptype: "click",
          device: "desktop",
          url: _170._234(),
          fromdate: _265(_417),
          todate: _265(_197),
        };
      }
      function _412(_15) {
        _2.opener.postMessage(_15, "*");
        _10(
          "Sent " +
            _15.message +
            (_15.requestUrl ? ", request URL: " + _15.requestUrl : "")
        );
      }
      function _741(_15) {
        if (_15.message && _15.message.indexOf("MouseflowLiveHeatmaps_") === 0)
          _10(
            "Received " +
              _15.message +
              (_15.requestUrl ? ", request URL: " + _15.requestUrl : "")
          );
      }
      function _753(_266) {
        _10("Live heatmaps loading script: " + _266);
      }
      function _265(_97) {
        return (
          _97.getFullYear() +
          "-" +
          _632(_97.getMonth() + 1, "00") +
          "-" +
          _632(_97.getDate(), "00")
        );
      }
      function _632(_754, _553) {
        return (_553 + _754).slice(-_553.length);
      }
      this._42 = _42;
      this._64 = _64;
      this._593 = function (_16) {
        _772(_16);
        if (_251) {
          _2.postMessage('{"mfCommand":"MouseflowHeatmap_UpdateHeatmap"}', "*");
        } else {
          _443();
          var message = {
            mfCommand: "settings_change",
            value: { settings: _31, reloadData: _16.maptype ? false : true },
          };
          _2.postMessage(JSON.stringify(message), "*");
        }
        _10("Sent postmessage updateheatmap");
      };
      _2.mouseflowHeatmap = {
        streamData: function (_17, _409, _121, _164) {
          _206.push({
            _17: _17,
            _409: _409 || function () {},
            _121: _121 || function () {},
            _164: _164 || function () {},
          });
          _412({
            message: "MouseflowLiveHeatmaps_StreamData",
            requestUrl: _17,
          });
        },
        getData: function (_17, _121, _164) {
          _206.push({
            _17: _17,
            _121: _121 || function () {},
            _164: _164 || function () {},
          });
          _412({
            message: "MouseflowLiveHeatmaps_RequestData",
            requestUrl: _17,
          });
        },
      };
    }
    function _714(_2, _109, _23, _9, _18, _7) {
      var _11 = _2.document,
        _142,
        _43,
        _10,
        _13,
        _132,
        _21,
        _525,
        _526,
        _531,
        _126,
        _95,
        _307,
        _123,
        _466,
        _162,
        _299,
        _222,
        _128,
        _104;
      function _42(_770, _414, _229, _228, _301, _415) {
        _142 = _770;
        _43 = _414;
        _10 = _415;
        _13 = _901() || {
          _118: false,
          _83: "exclude",
          _60: _229 || [],
          _59: _228 || [],
          _78: _301 || [],
        };
        _10("Starting privacy tool");
        _132 = _109._260();
        if (!_132) {
          _10(
            "Privacy tool not initiated - could not create root HTML element"
          );
          return;
        }
        _769();
        _23._53(function () {
          _768();
          _79(_13);
        }, 1000);
      }
      function _64() {
        _761();
        _109._394();
      }
      function _769() {
        _18._24(_2, "message", function (event) {
          switch (event.data.message) {
            case "MouseflowPrivacyTool_Hello":
              _10("Privacy tool API ready");
              _222 = event.source;
              if (event.data.cssSelectorBlacklist) {
                _13._60 = event.data.cssSelectorBlacklist;
                _13._59 = event.data.cssSelectorWhitelist;
                _13._78 = event.data.cssSelectorTracked;
              }
              _448();
              break;
            case "MouseflowPrivacyTool_Save_Success":
              _10("Successfully saved CSS lists");
              if (_128) _128();
              _128 = undefined;
              _104 = undefined;
              break;
            case "MouseflowPrivacyTool_Save_Failed":
              _10("Failed saving CSS lists");
              if (_104) _104();
              _128 = undefined;
              _104 = undefined;
              _398(
                "Uh oh! We couldn't save your changes.<br><br>" +
                  "Please refresh the page and try again."
              );
              break;
            case "MouseflowPrivacyTool_Unauthorized":
              _10("Privacy tool API logged out - cannot save");
              if (_104) _104();
              _128 = undefined;
              _104 = undefined;
              _398(
                "Uh oh! We couldn't save your changes.<br><br>" +
                  "Please log into Mouseflow and try again."
              );
              break;
          }
        });
        if (_2.opener) {
          _10("Loading privacy tool API using window.opener");
          _2.opener.postMessage({ message: "MouseflowPrivacyTool_Hello" }, "*");
        }
        _23._53(function () {
          if (!_222) {
            _10("Loading privacy tool API using iframe");
            var _215 = _11.createElement("iframe");
            _215.style.width = "0px";
            _215.style.height = "0px";
            _215.style.display = "none";
            _215.src = _142 + "/websites/" + _43 + "/privacytool";
            _132.appendChild(_215);
            _23._53(function () {
              if (!_222) {
                _10("Loading privacy tool API timed out");
                _888(
                  "We're having trouble loading the Privacy Tool on this page. Please try " +
                    "refreshing the page or logging in to Mouseflow and reloading the Privacy Tool from there.<br><br>" +
                    'If you need help, please don\'t hesitate to reach out to us at:  <a class="green" href="mailto:support@mouseflow.com">support@mouseflow.com</a>'
                );
              }
            }, 5000);
          }
        }, 2000);
      }
      function _768() {
        _21 = _897(_13);
        _525 = _21.querySelector(".tool-exclude output");
        _526 = _21.querySelector(".tool-whitelist output");
        _531 = _21.querySelector(".tool-track output");
        _126 = _21.querySelector(".tool-status-text");
        _95 = _21.querySelector(".btn-widget");
        _307 = _21.querySelector(".tool-loading h2");
        _13._60.forEach(_427);
        _13._59.forEach(_433);
        _13._78.forEach(_439);
        _132.appendChild(_21);
        _123 = _863();
        _21.appendChild(_123);
        _9._231(_11.body, "mf-privacy-tool-opened", !_13._118);
        _767();
        _448();
      }
      function _448() {
        if (_21 && _222) {
          _9._40(_21, "is-loading");
          _103();
          _765();
        }
      }
      function _399() {
        _281();
        _64();
        _2.close();
      }
      function _767() {
        _18._24(_21, "click", ".mf-tool-close", _399, { _90: true });
      }
      function _765() {
        _18._24(_21, "click", ".mf-tool-toggle", _760, { _90: true });
        _18._24(_21, "click", ".mf-tool-close", _399, { _90: true });
        _18._24(_21, "click", ".mf-tool-exclude", _758, { _90: true });
        _18._24(_21, "click", ".mf-tool-whitelist", _757, { _90: true });
        _18._24(_21, "click", ".mf-tool-track", _756, { _90: true });
        _18._24(_21, "click", ".highlight-excluded", _755, { _90: true });
        _18._24(_21, "click", ".highlight-whitelisted", _819, { _90: true });
        _18._24(_21, "click", ".highlight-tracked", _818, { _90: true });
        _18._24(_21, "click", ".mf-remove-excluded", _850, { _90: true });
        _18._24(_21, "click", ".mf-remove-whitelisted", _820, { _90: true });
        _18._24(_21, "click", ".mf-remove-tracked", _881, { _90: true });
        _18._24(_21, "submit", _880, { _90: true });
        _18._24(_11, "mouseover", _879, { _33: true });
        _18._24(_11, "mouseleave", _878, { _33: true });
        _18._24(_11, "mouseup", _876, { _33: true });
        _18._24(_11, "mouseenter", _136, { _33: true });
        _18._24(_11, "mousemove", _136, { _33: true });
        _18._24(_11, "mousedown", _136, { _33: true });
        _18._24(_11, "click", _136, { _33: true });
        _18._24(_11, "mouseout", _136, { _33: true });
        _18._24(_11, "scroll", _103, { _33: true, _191: true });
        _18._24(_2, "resize", _103, { _33: true, _191: true });
        var MutationObserver =
          _2.MutationObserver ||
          _2.WebKitMutationObserver ||
          _2.MozMutationObserver;
        if (MutationObserver) {
          _299 = new MutationObserver(function (_406) {
            _406 = _406.filter(function (_71) {
              if (
                _71.target.nodeType !== 1 ||
                _9._66(_71.target, "#mouseflow *")
              )
                return false;
              var _773 =
                _71.oldValue && _71.oldValue.indexOf("mf-highlight") !== -1;
              var _764 =
                _71.target.className &&
                _71.target.className.indexOf("mf-highlight") !== -1;
              var _762 = _773 || _764;
              if (
                _71.type === "attributes" &&
                _71.attributeName === "class" &&
                _762
              )
                return false;
              return true;
            });
            if (_406.length) _103();
          });
          _299.observe(_11, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true,
            attributeOldValue: true,
          });
        }
      }
      function _761() {
        _18._487();
        if (_299) _299.disconnect();
      }
      function _760() {
        _13._118 = !_13._118;
        _79(_13);
        _9._231(_21, "tool-closed", _13._118);
        _9._231(_11.body, "mf-privacy-tool-opened", !_13._118);
        var _306 = _21.getElementsByClassName("step")[0];
        var _300 = _21.getElementsByClassName("tool-container")[0];
        if (_13._118) {
          _9._40(_306, "fade-out");
          _9._58(_306, "fade-in");
          _9._40(_300, "fade-in");
          _9._58(_300, "fade-out");
        } else {
          _9._40(_306, "fade-in");
          _9._58(_306, "fade-out");
          _9._40(_300, "fade-out");
          _9._58(_300, "fade-in");
        }
      }
      function _758() {
        _13._83 = "exclude";
        _79(_13);
        _9._40(_21.getElementsByClassName("mf-tool-whitelist")[0], "active");
        _9._40(_21.getElementsByClassName("tool-whitelist")[0], "active");
        _9._40(_21.getElementsByClassName("mf-tool-track")[0], "active");
        _9._40(_21.getElementsByClassName("tool-track")[0], "active");
        _9._58(_21.getElementsByClassName("mf-tool-exclude")[0], "active");
        _9._58(_21.getElementsByClassName("tool-exclude")[0], "active");
      }
      function _757() {
        _13._83 = "whitelist";
        _79(_13);
        _9._40(_21.getElementsByClassName("mf-tool-exclude")[0], "active");
        _9._40(_21.getElementsByClassName("tool-exclude")[0], "active");
        _9._40(_21.getElementsByClassName("mf-tool-track")[0], "active");
        _9._40(_21.getElementsByClassName("tool-track")[0], "active");
        _9._58(_21.getElementsByClassName("mf-tool-whitelist")[0], "active");
        _9._58(_21.getElementsByClassName("tool-whitelist")[0], "active");
      }
      function _756() {
        _13._83 = "track";
        _79(_13);
        _9._40(_21.getElementsByClassName("mf-tool-exclude")[0], "active");
        _9._40(_21.getElementsByClassName("tool-exclude")[0], "active");
        _9._40(_21.getElementsByClassName("mf-tool-whitelist")[0], "active");
        _9._40(_21.getElementsByClassName("tool-whitelist")[0], "active");
        _9._58(_21.getElementsByClassName("mf-tool-track")[0], "active");
        _9._58(_21.getElementsByClassName("tool-track")[0], "active");
      }
      function _755(_6) {
        if (_13._83 === "exclude") {
          _432(_6.target.getAttribute("data-target"));
          _103();
        }
      }
      function _819(_6) {
        if (_13._83 === "whitelist") {
          _434(_6.target.getAttribute("data-target"));
          _103();
        }
      }
      function _818(_6) {
        if (_13._83 === "track") {
          _438(_6.target.getAttribute("data-target"));
          _103();
        }
      }
      function _850(_6) {
        _432(_6.target.parentNode.getAttribute("data-target"));
        _103();
      }
      function _820(_6) {
        _434(_6.target.parentNode.getAttribute("data-target"));
        _103();
      }
      function _881(_6) {
        _438(_6.target.parentNode.getAttribute("data-target"));
        _103();
      }
      function _880() {
        _900();
        _873(
          _13._60,
          _13._59,
          _13._78,
          function () {
            _523();
            _95.innerHTML = "Saved";
            _281();
            _23._53(_399, 500);
          },
          function () {
            _523();
          }
        );
      }
      function _879(_6) {
        _23._112(_466);
        var _465 = _11.getElementsByClassName("mf-highlight");
        for (var _1 = 0; _1 < _465.length; _1++) {
          _9._40(_465[_1], "mf-highlight");
        }
        _9._58(_123, "hidden");
        if (_136(_6) || _454(_6.target)) return;
        _9._58(_6.target, "mf-highlight");
        _466 = _23._53(function () {
          var _38 = _6.target.getBoundingClientRect();
          _123.style.left = _38.left + _2.pageXOffset + "px";
          _123.style.top = _38.top + _2.pageYOffset + "px";
          _123.style.width = _38.width + "px";
          _123.style.height = _38.height + "px";
          _9._40(_123, "hidden");
        }, 75);
      }
      function _878(_6) {
        if (_136(_6)) return;
        if (_6.target === _11) {
          _9._58(_123, "hidden");
        }
      }
      function _876(_6) {
        if (_136(_6)) return;
        if (_6.button !== 0 || _454(_6.target)) return;
        _9._40(_6.target, "mf-highlight");
        var _8 = _869(_6.target);
        if (_13._83 === "exclude") {
          _427(_8);
        } else if (_13._83 === "whitelist") {
          _433(_8);
        } else {
          _439(_8);
        }
        _103();
      }
      function _136(_6) {
        if (
          _13._118 ||
          _6.target.nodeType !== 1 ||
          _9._66(_6.target, "#mouseflow *")
        )
          return true;
        _6.preventDefault();
        _6.stopPropagation();
        return false;
      }
      function _454(_3) {
        return (
          _3 === _11.body ||
          _9._66(_3, "html") ||
          (_13._83 === "whitelist" &&
            (!/INPUT|TEXTAREA/.test(_3.tagName) ||
              /checkbox|radio|button|submit/.test(_3.type)))
        );
      }
      function _439(_8) {
        if (_8 && _13._78.indexOf(_8) === -1) {
          _13._78.unshift(_8);
          _79(_13);
        }
        _178();
      }
      function _427(_8) {
        if (_8 && _13._60.indexOf(_8) === -1) {
          _13._60.unshift(_8);
          _79(_13);
        }
        _178();
      }
      function _433(_8) {
        if (_8 && _13._59.indexOf(_8) === -1) {
          _13._59.unshift(_8);
          _79(_13);
        }
        _178();
      }
      function _432(_8) {
        if (_8 && _13._60.indexOf(_8) !== -1) {
          _13._60 = _13._60.filter(function (_153) {
            return _153 !== _8;
          });
          _79(_13);
        }
        _178();
      }
      function _434(_8) {
        if (_8 && _13._59.indexOf(_8) !== -1) {
          _13._59 = _13._59.filter(function (_153) {
            return _153 !== _8;
          });
          _79(_13);
        }
        _178();
      }
      function _438(_8) {
        if (_8 && _13._78.indexOf(_8) !== -1) {
          _13._78 = _13._78.filter(function (_153) {
            return _153 !== _8;
          });
          _79(_13);
        }
        _178();
      }
      function _103() {
        _23._112(_162);
        if (!_162) {
          _23._53(function () {
            if (_162) {
              _23._112(_162);
              _426();
              _162 = undefined;
            }
          }, 200);
        }
        _162 = _23._53(function () {
          _426();
          _162 = undefined;
        }, 100);
      }
      function _426() {
        var _428 = _21.querySelectorAll(
            ".highlight-excluded,.highlight-whitelisted,.highlight-tracked"
          ),
          _1;
        for (_1 = 0; _1 < _428.length; _1++) {
          _21.removeChild(_428[_1]);
        }
        _13._60.forEach(function (_8) {
          var _96 = _11.querySelectorAll(_8);
          for (_1 = 0; _1 < _96.length; _1++) {
            _21.appendChild(_861(_8, _96[_1].getBoundingClientRect()));
          }
        });
        _13._59.forEach(function (_8) {
          var _96 = _11.querySelectorAll(_8);
          for (_1 = 0; _1 < _96.length; _1++) {
            _21.appendChild(_836(_8, _96[_1].getBoundingClientRect()));
          }
        });
        _13._78.forEach(function (_8) {
          var _96 = _11.querySelectorAll(_8);
          for (_1 = 0; _1 < _96.length; _1++) {
            _21.appendChild(_835(_8, _96[_1].getBoundingClientRect()));
          }
        });
      }
      function _873(_60, _59, _78, _121, _871) {
        if (_128) {
          _10(
            "Attempted to save CSS lists while previous save was in progress"
          );
          return;
        }
        _128 = _121;
        _104 = _871;
        _893();
        _222.postMessage(
          {
            message: "MouseflowPrivacyTool_Save",
            blacklist: _60,
            whitelist: _59,
            tracked: _78,
          },
          "*"
        );
        _23._53(function () {
          if (_128 === _121) {
            _10("Saving CSS lists timed out");
            if (_104) _104();
            _128 = undefined;
            _104 = undefined;
            _398(
              "Uh oh! We couldn't save your changes.<br><br>" +
                "Please log into Mouseflow and try again."
            );
          }
        }, 7500);
      }
      function _869(_3) {
        if (_3 == null) return null;
        try {
          return _505(_3);
        } catch (ex) {
          _10("Could not get element selector: " + ex.message);
          return null;
        }
      }
      function _907(_3) {
        var _202 = _865(_3);
        if (!_202) return null;
        if (_9._66(_3, _202)) return _202;
        var _109 = document.querySelector(_202);
        var _101 = _3;
        var _54 = [];
        while (_101 && _101 !== _109) {
          var _35 = _424(_101);
          if (_35.length === 0) _35.push(_469(_101));
          _54.unshift(_35);
          _101 = _101.parentNode;
        }
        _54.unshift(_202);
        return _407(_54);
      }
      function _505(_3, _54) {
        if (!_54) _54 = [];
        var _35 = _424(_3);
        _54.unshift(_35);
        var _8 = _407(_54);
        if (_8) return _8;
        if (_35.length === 0) {
          _35.push(_469(_3));
          _8 = _407(_54);
          if (_8) return _8;
        }
        return _505(_3.parentNode, _54);
      }
      function _407(_54) {
        var _410 = _54.length > 1 ? _883.apply(this, _54) : _54[0];
        for (var _1 = 0; _1 < _410.length; _1++) {
          if (_11.querySelectorAll(_410[_1]).length === 1) return _410[_1];
        }
        return null;
      }
      function _865(_3) {
        var _101 = _3;
        while (_101) {
          var _35 = _424(_101);
          for (var _1 = 0; _1 < _35.length; _1++) {
            if (_11.querySelectorAll(_35[_1]).length === 1) return _35[_1];
          }
          _101 = _101.parentNode;
        }
        return null;
      }
      function _424(_3) {
        if (_3 === _11.body) return ["body"];
        var _35 = [];
        var _422 = _3.parentNode;
        var _1;
        var _48 = _3.getAttribute("id");
        var _8 = "#" + _9._139(_48);
        if (
          _48 &&
          _11.querySelectorAll(_8).length === 1 &&
          !_9._144(_3, "data-mf-ignore-child-ids") &&
          _7.useIdSelectors
        )
          return [_8];
        var _19 = _3.getAttribute("name");
        _8 = '[name="' + _9._139(_19) + '"]';
        if (_19) {
          if (_11.querySelectorAll(_8).length === 1) return [_8];
          if (_422.querySelectorAll(_8).length === 1) _35.push(_8);
        }
        var _84 = _9._159(_3);
        for (_1 = 0; _1 < _84.length; _1++) {
          _8 = "." + _9._139(_84[_1]);
          if (_11.querySelectorAll(_8).length === 1) return [_8];
          if (_422.querySelectorAll(_8).length === 1) _35.push(_8);
        }
        for (_1 = 0; _1 < _84.length; _1++) {
          _8 = _9._139(_3.tagName.toLowerCase()) + "." + _9._139(_84[_1]);
          if (_11.querySelectorAll(_8).length === 1) return [_8];
          if (_422.querySelectorAll(_8).length === 1) _35.push(_8);
        }
        return _35;
      }
      function _469(_3) {
        var _8 = _9._139(_3.tagName.toLowerCase());
        if (_3.parentNode.querySelectorAll(_8).length === 1) return _8;
        var _184 = 0;
        var _293 = _3;
        while (_293) {
          if (_293.tagName === _3.tagName) _184++;
          _293 = _293.previousElementSibling;
        }
        _8 += ":nth-of-type(" + _184 + ")";
        return _8;
      }
      function _883() {
        var _35, _177, _181, _1;
        var _107 = 0;
        var _165 = arguments.length - 1;
        var _291 = false;
        var _244 = true;
        while (_107 < _165) {
          _177 = undefined;
          for (_1 = 0; _1 <= _107; _1++) {
            _177 = _177 ? _288(_177, arguments[_1], " > ") : arguments[_1];
          }
          _181 = undefined;
          for (_1 = arguments.length - 1; _1 >= _165; _1--) {
            _181 = _181 ? _288(arguments[_1], _181, " > ") : arguments[_1];
          }
          var _285 = _107 + 1 == _165 ? " > " : " ";
          _35 = _35
            ? _35.concat(_288(_177, _181, _285))
            : _288(_177, _181, _285);
          if (_244 && _291) {
            _165--;
            _291 = false;
            _244 = true;
          } else if (_244) {
            _165--;
            _291 = true;
            _244 = false;
          } else {
            _107++;
            if (_107 != _165) _165++;
            _291 = true;
            _244 = true;
          }
        }
        return _35;
      }
      function _288(_513, _516, _285) {
        var _35 = [];
        for (var _1 = 0; _1 < _513.length; _1++) {
          for (var _52 = 0; _52 < _516.length; _52++) {
            _35.push(_513[_1] + _285 + _516[_52]);
          }
        }
        return _35;
      }
      function _901() {
        var _4 = _2.localStorage.getItem("mf_privacyTool");
        return _4 ? _9._146(_4) : null;
      }
      function _79(_31) {
        _31 = _31 ? _9._69(_31) : "";
        _2.localStorage.setItem("mf_privacyTool", _31);
      }
      function _281() {
        _2.localStorage.removeItem("mf_privacyTool");
      }
      function _900() {
        _95.setAttribute("disabled", "");
        _95.setAttribute("original-html", _95.innerHTML);
        _95.innerHTML =
          "<i>&bull;</i> <i>&bull;</i> <i>&bull;</i> <i>&bull;</i>";
        _9._58(_95, "loading");
      }
      function _523() {
        _9._40(_95, "loading");
        _95.innerHTML = _95.getAttribute("original-html");
        _95.removeAttribute("original-html");
        _95.removeAttribute("disabled");
      }
      function _178() {
        _525.innerHTML = _828(_13._60);
        _526.innerHTML = _827(_13._59);
        _531.innerHTML = _824(_13._78);
        _126.innerHTML = _381(_13._60, _13._59, _13._78);
        _9._40(_126, "red");
      }
      function _888(_163) {
        if (!_307) return;
        _307.innerHTML = _163;
        _9._58(_307, "red");
      }
      function _398(_163) {
        if (!_126) return;
        _126.innerHTML = _163;
        _9._58(_126, "red");
      }
      function _893() {
        if (!_126) return;
        _126.innerHTML = _381(_13._60, _13._59, _13._78);
        _9._40(_126, "red");
      }
      function _897(_13) {
        var _30 = _11.createElement("div");
        _30.className = "privacy-tool is-loading";
        _30.innerHTML = _833(_13);
        if (_13._118) _30.className += " tool-closed";
        var _171 = _11.createElement("style");
        _171.type = "text/css";
        _171.innerHTML = _839();
        _30.appendChild(_171);
        return _30;
      }
      function _863() {
        var _30 = _11.createElement("div");
        _30.className = "highlight-box";
        return _30;
      }
      function _861(_8, _38) {
        var _30 = _11.createElement("div");
        _30.className = "highlight-box highlight-excluded";
        _30.setAttribute("data-target", _8);
        _30.style.left = _38.left + _2.pageXOffset + "px";
        _30.style.top = _38.top + _2.pageYOffset + "px";
        _30.style.width = _38.width + "px";
        _30.style.height = _38.height + "px";
        return _30;
      }
      function _836(_8, _38) {
        var _30 = _11.createElement("div");
        _30.className = "highlight-box highlight-whitelisted";
        _30.setAttribute("data-target", _8);
        _30.style.left = _38.left + _2.pageXOffset + "px";
        _30.style.top = _38.top + _2.pageYOffset + "px";
        _30.style.width = _38.width + "px";
        _30.style.height = _38.height + "px";
        return _30;
      }
      function _835(_8, _38) {
        var _30 = _11.createElement("div");
        _30.className = "highlight-box highlight-tracked";
        _30.setAttribute("data-target", _8);
        _30.style.left = _38.left + _2.pageXOffset + "px";
        _30.style.top = _38.top + _2.pageYOffset + "px";
        _30.style.width = _38.width + "px";
        _30.style.height = _38.height + "px";
        return _30;
      }
      function _833(_13) {
        return (
          '<form action="#" id="mf_privacy_tool">' +
          _831(_13) +
          _829(_13) +
          "</form>"
        );
      }
      function _831(_13) {
        return (
          '<div class="step step-block' +
          (_13._118 ? " fade-in" : "") +
          '">' +
          '<div class="widget-header">' +
          '<div class="widget-text">Open Privacy Tool</div>' +
          '<div class="widget-toggle">' +
          '<a href="#" class="btn-arrow btn-arrow--up mf-tool-toggle"></a>' +
          "</div>" +
          "</div>" +
          "</div>"
        );
      }
      function _829() {
        return (
          '<div class="tool-container' +
          (_13._118 ? "" : " fade-in") +
          '">' +
          '<div class="tool-header">' +
          '<img class="logo" alt="Mouseflow" src="https://mouseflow.com/static/img/logo-light.png">' +
          '<div class="tool-toggle">' +
          '<div class="tool-toggle-text">' +
          "Hide to navigate" +
          "</div>" +
          '<div class="tool-toggle-icon">' +
          '<a href="#" class="btn-arrow btn-arrow--down mf-tool-toggle"></a>' +
          "</div>" +
          "</div>" +
          '<div class="tool-close">' +
          '<div class="tool-toggle-text">' +
          "Close" +
          "</div>" +
          '<div class="tool-toggle-icon">' +
          '<a href="#" class="btn-cross mf-tool-close"></a>' +
          "</div>" +
          "</div>" +
          "</div>" +
          '<div class="tool-content">' +
          '<ul class="tool-menu">' +
          '<li class="tool-menu-item mf-tool-exclude' +
          (_13._83 === "exclude" ? " active" : "") +
          '">' +
          "Excluded content" +
          "</li>" +
          '<li class="tool-menu-item mf-tool-whitelist' +
          (_13._83 === "whitelist" ? " active" : "") +
          '">' +
          "Whitelisted fields" +
          "</li>" +
          '<li class="tool-menu-item mf-tool-track' +
          (_13._83 === "track" ? " active" : "") +
          '">' +
          "Tracked elements" +
          "</li>" +
          "</ul>" +
          '<div class="tool-exclude' +
          (_13._83 === "exclude" ? " active" : "") +
          '">' +
          "<h2>Exclude content from appearing in Mouseflow</h2>" +
          "<p>" +
          "To get started, just click the element(s) or content you wish to exclude. " +
          "This will add the necessary CSS selectors to be blocked in the list below." +
          "</p>" +
          "<p>" +
          'When you\'re finished, click "Hide to navigate" to browse to another page to exclude additional content, or click "Save and close" to keep your changes.' +
          "</p>" +
          "<p>" +
          'For more details and best practices, read our <a href="#" class="js-external-link green" data-link-url="https://help.mouseflow.com/articles/4263776">Support Guide</a>.' +
          "</p>" +
          "<h3>Excluded content:</h3>" +
          "<div>" +
          "<output></output>" +
          "</div>" +
          "</div>" +
          '<div class="tool-whitelist' +
          (_13._83 === "whitelist" ? " active" : "") +
          '">' +
          "<h2>Whitelist input fields</h2>" +
          "<p>" +
          "You can whitelist any input field or text area, simply by clicking the field(s) on the page. " +
          "This will let Mouseflow record input in that field." +
          "</p>" +
          "<p>" +
          'When you\'re finished, click "Hide to navigate" to browse to another page to exclude additional content, or click "Save and close" to keep your changes.' +
          "</p>" +
          "<p>" +
          'For more details and best practices, read our <a href="#" class="js-external-link green" data-link-url="https://help.mouseflow.com/articles/4263776">Support Guide</a>.' +
          "</p>" +
          "<h3>Whitelisted fields:</h3>" +
          "<div>" +
          "<output></output>" +
          "</div>" +
          "</div>" +
          '<div class="tool-track' +
          (_13._83 === "track" ? " active" : "") +
          '">' +
          "<h2>Tracked elements</h2>" +
          "<p>" +
          "When viewing a heatmap, most of your links will include a box that shows additional metrics(clicks, hovers, etc.).In some cases, these boxes will not appear." +
          "</p>" +
          "<p>" +
          "If you've found such an element, you can select it here. That will ensure the additional metrics are shown in your heatmaps." +
          "</p>" +
          "<p>" +
          'When you\'re finished, click "Hide to navigate" to browse to another page to exclude additional content, or click "Save and close" to keep your changes.' +
          "</p>" +
          "<p>" +
          'For more details and best practices, read our <a href="#" class="js-external-link green" data-link-url="https://help.mouseflow.com/articles/4263776">Support Guide</a>.' +
          "</p>" +
          "<h3>Tracked elements:</h3>" +
          "<div>" +
          "<output></output>" +
          "</div>" +
          "</div>" +
          '<div class="tool-status">' +
          '<div class="tool-status-text">' +
          _381(_13._60, _13._59, _13._78) +
          "</div>" +
          '<div class="tool-status-buttons">' +
          '<button type="submit" class="btn-widget">Save and close</button>' +
          '<a href="#" class="green bold mf-tool-close">Close Privacy Tool</a>' +
          "</div>" +
          "</div>" +
          '<div class="tool-loading">' +
          '<h2 class="loading">Loading the Privacy Tool<i>.</i><i>.</i><i>.</i></h2>' +
          "</div>" +
          '<div class="tool-message">' +
          "<h3>Browser window is to small to load the Privacy Tool</h3>" +
          "<p>To use Mouseflow's Privacy Tool, you need to view the page in a larger browser window.</p>" +
          "</div>" +
          "</div>" +
          "</div>"
        );
      }
      function _828(_54) {
        return _54
          .map(function (_8) {
            return (
              '<div class="tm-tag" data-target="' +
              _9._145(_8) +
              '">' +
              _9._145(_8) +
              '<a href="#" class="btn-cross mf-remove-excluded"></a>' +
              "</div>"
            );
          })
          .join("");
      }
      function _827(_54) {
        return _54
          .map(function (_8) {
            return (
              '<div class="tm-tag" data-target="' +
              _9._145(_8) +
              '">' +
              _9._145(_8) +
              '<a href="#" class="btn-cross mf-remove-whitelisted"></a>' +
              "</div>"
            );
          })
          .join("");
      }
      function _824(_54) {
        return _54
          .map(function (_8) {
            return (
              '<div class="tm-tag" data-target="' +
              _9._145(_8) +
              '">' +
              _9._145(_8) +
              '<a href="#" class="btn-cross mf-remove-tracked"></a>' +
              "</div>"
            );
          })
          .join("");
      }
      function _381(_60, _59, _481) {
        return (
          "<p>You have:</p>" +
          "<p>" +
          '&nbsp;&bull; excluded <i class="green"> ' +
          _60.length +
          "</i> " +
          (_60.length === 1 ? "element" : "elements") +
          "<br>" +
          '&nbsp;&bull; whitelisted <i class="green">' +
          _59.length +
          "</i> input " +
          (_59.length === 1 ? "field" : "fields") +
          "<br>" +
          '&nbsp;&bull; tracked <i class="green">' +
          _481.length +
          "</i> input " +
          (_481.length === 1 ? "element" : "elements") +
          "</p>"
        );
      }
      function _839() {
        return (
          ".mf-highlight {" +
          "cursor: pointer !important;" +
          "}" +
          ".mf-privacy-tool-opened iframe {" +
          "pointer-events: none;" +
          "}" +
          "#mouseflow .highlight-box {" +
          "background-color: #add8e6;" +
          "border: 2px dotted #808080;" +
          "position: absolute;" +
          "border-radius: 2px;" +
          "z-index: 2147483646;" +
          "cursor: pointer;" +
          "pointer-events: none;" +
          "opacity: 0.5;" +
          "-webkit-transition: opacity .075s linear;" +
          "transition: opacity .075s linear;" +
          "}" +
          "#mouseflow .highlight-box.hidden," +
          "#mouseflow .tool-closed .highlight-box {" +
          "opacity: 0;" +
          "}" +
          "#mouseflow .highlight-box.highlight-excluded {" +
          "background-color: #ffb6c1;" +
          "pointer-events: initial;" +
          "}" +
          "#mouseflow .highlight-box.highlight-whitelisted {" +
          "background-color: #90ee90;" +
          "pointer-events: initial;" +
          "}" +
          "#mouseflow .highlight-box.highlight-tracked {" +
          "background-color: orange;" +
          "pointer-events: initial;" +
          "}" +
          "#mouseflow .tool-closed .highlight-box.highlight-excluded," +
          "#mouseflow .tool-closed .highlight-box.highlight-whitelisted," +
          "#mouseflow .tool-closed .highlight-box.highlight-tracked {" +
          "pointer-events: none;" +
          "}" +
          "#mouseflow .widget-header," +
          "#mouseflow .btn-widget {" +
          "background: #4cb377;" +
          "}" +
          "#mouseflow .widget-text," +
          "#mouseflow .btn-widget," +
          "#mouseflow .btn-arrow," +
          "#mouseflow .btn-cross {" +
          "color: #fff;" +
          "}" +
          "#mouseflow .tm-tag {" +
          "margin: 7px 7px 0 0;" +
          "padding: 7px;" +
          "display: inline-block;" +
          "border-radius: 3px;" +
          "background-color: #a7a7a7;" +
          "color: white;" +
          "font-size: 13px;" +
          "}" +
          "#mouseflow .step {" +
          "visibility: hidden;" +
          "opacity: 0;" +
          "position: fixed;" +
          "bottom: 30px;" +
          "right: 30px;" +
          "z-index: 2147483647;" +
          "width: 300px;" +
          "border-radius: 10px;" +
          "box-shadow: 0 0 15px rgba(0, 0, 0, .35);" +
          "overflow: hidden;" +
          "}" +
          "#mouseflow a:hover {" +
          "text-decoration: underline;" +
          "}" +
          "#mouseflow h2 {" +
          "font-size: 21px;" +
          "font-weight: 700;" +
          "line-height: 1.4em;" +
          "margin-bottom: 6px;" +
          "}" +
          "#mouseflow h3 {" +
          "font-size: 16px;" +
          "font-weight: 700;" +
          "line-height: 1.4em;" +
          "}" +
          "#mouseflow p {" +
          "margin-bottom: 8px;" +
          "line-height: 1.4em;" +
          "}" +
          "#mouseflow .green {" +
          "color: #47b475;" +
          "}" +
          "#mouseflow .red {" +
          "color: #ea1e1e;" +
          "}" +
          "#mouseflow .bold {" +
          "font-weight: 700;" +
          "}" +
          "#mouseflow .tool-container {" +
          "visibility: visible;" +
          "opacity: 0;" +
          "position: fixed;" +
          "bottom: 0;" +
          "left: 0;" +
          "width: 100%;" +
          "height: 350px;" +
          "max-height: 40%;" +
          "overflow: hidden;" +
          "background-color: white;" +
          "border-top: 2px solid #37312f;" +
          "z-index: 2147483647;" +
          "}" +
          "#mouseflow .tool-header {" +
          "background-color: #47403e;" +
          "height: 58px;" +
          "}" +
          "#mouseflow .logo {" +
          "display: inline;" +
          "height: 40px;" +
          "margin: 9px 10px;" +
          "}" +
          "#mouseflow .tool-toggle," +
          "#mouseflow .tool-close {" +
          "float: right;" +
          "padding: 18px 24px;" +
          "}" +
          "#mouseflow .is-loading .tool-close {" +
          "display: block;" +
          "}" +
          "#mouseflow .is-loading .tool-toggle," +
          "#mouseflow .tool-close {" +
          "display: none;" +
          "}" +
          "#mouseflow .tool-toggle-text {" +
          "display: inline-block;" +
          "color: white;" +
          "font-size: 18px;" +
          "}" +
          "#mouseflow .tool-toggle-icon {" +
          "width: 30px;" +
          "display: inline-block;" +
          "position: relative;" +
          "top: 2px;" +
          "}" +
          "#mouseflow .tool-close .tool-toggle-icon {" +
          "top: 4px;" +
          "}" +
          "#mouseflow .tool-content {" +
          "height: calc(100% - 58px);" +
          "}" +
          "#mouseflow .tool-menu {" +
          "width: 15%;" +
          "height: 100%;" +
          "float: left;" +
          "}" +
          "#mouseflow .tool-menu-item {" +
          "background-color: #f8f8f8;" +
          "color: black;" +
          "cursor: pointer;" +
          "height: 40px;" +
          "padding: 12px;" +
          "}" +
          "#mouseflow .tool-menu-item.active {" +
          "position: relative;" +
          "background-color: #4db378;" +
          "color: white;" +
          "cursor: default;" +
          "}" +
          "#mouseflow .tool-menu-item.active:after {" +
          "display: block;" +
          "border: solid transparent;" +
          'content: " ";' +
          "position: absolute;" +
          "pointer-events: none;" +
          "border-left-color: #4db378;" +
          "border-width: 20px;" +
          "top: 0;" +
          "right: -40px;" +
          "}" +
          "#mouseflow .tool-menu-item:not(.active):hover {" +
          "background-color: #e4e4e4" +
          "}" +
          "#mouseflow .tool-exclude," +
          "#mouseflow .tool-whitelist," +
          "#mouseflow .tool-track {" +
          "display: none;" +
          "width: 70%;" +
          "height: 100%;" +
          "float: left;" +
          "color: rgb(71, 64, 62);" +
          "overflow-y: auto;" +
          "overflow-x: hidden;" +
          "padding: 10px 40px;" +
          "}" +
          "#mouseflow .tool-exclude.active," +
          "#mouseflow .tool-whitelist.active," +
          "#mouseflow .tool-track.active {" +
          "display: block;" +
          "}" +
          "#mouseflow .tool-exclude::-webkit-scrollbar," +
          "#mouseflow .tool-whitelist::-webkit-scrollbar," +
          "#mouseflow .tool-track::-webkit-scrollbar {" +
          "width: 8px;" +
          "}" +
          "#mouseflow .tool-exclude::-webkit-scrollbar-track," +
          "#mouseflow .tool-whitelist::-webkit-scrollbar-track," +
          "#mouseflow .tool-track::-webkit-scrollbar-track {" +
          "border-radius: 10px;" +
          "background-color: #F5F5F5;" +
          "-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);" +
          "}" +
          "#mouseflow .tool-exclude::-webkit-scrollbar-thumb," +
          "#mouseflow .tool-whitelist::-webkit-scrollbar-thumb," +
          "#mouseflow .tool-track::-webkit-scrollbar-thumb {" +
          "border-radius: 10px;" +
          "background-color: #a7a7a7;" +
          "-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);" +
          "}" +
          "#mouseflow .tool-status {" +
          "width: 15%;" +
          "background-color: #f8f8f8;" +
          "height: 100%;" +
          "float: left;" +
          "position: relative;" +
          "}" +
          "#mouseflow .tool-status-text {" +
          "font-size: 16px;" +
          "font-weight: 700;" +
          "text-align: left;" +
          "padding: 0 15px;" +
          "position: absolute;" +
          "top: 40px;" +
          "}" +
          "#mouseflow .tool-status-buttons {" +
          "width: 100%;" +
          "text-align: center;" +
          "position: absolute;" +
          "padding: 0 30px;" +
          "bottom: 40px;" +
          "}" +
          "#mouseflow .tool-loading {" +
          "width: 100%;" +
          "height: calc(100% - 58px);" +
          "background-color: white;" +
          "color: rgb(71, 64, 62);" +
          "position: absolute;" +
          "top: 58px;" +
          "z-index: 2;" +
          "visibility: hidden;" +
          "opacity: 0;" +
          "-webkit-animation: fadeOut .3s linear;" +
          "animation: fadeOut .3s linear;" +
          "}" +
          "#mouseflow .is-loading .tool-loading {" +
          "visibility: visible;" +
          "opacity: 1;" +
          "-webkit-animation: fadeIn .3s linear;" +
          "animation: fadeIn .3s linear;" +
          "}" +
          "#mouseflow .tool-loading h2 {" +
          "position: absolute;" +
          "left: 50%;" +
          "top: 50%;" +
          "-webkit-transform: translate(-50%, -50%);" +
          "-ms-transform: translate(-50%, -50%);" +
          "transform: translate(-50%, -50%);" +
          "}" +
          "#mouseflow .widget-header {" +
          "color: #fff;" +
          "padding: 12px 15px;" +
          "vertical-align: middle;" +
          "overflow: hidden;" +
          "position: relative;" +
          "z-index: 1;" +
          "}" +
          "#mouseflow .widget-header:before {" +
          'content: "";' +
          "display: inline;" +
          "position: absolute;" +
          "top: 0;" +
          "left: 0;" +
          "right: 0;" +
          "bottom: 0;" +
          "background: rgba(0, 0, 0, .3);" +
          "opacity: 0;" +
          "z-index: -1;" +
          "-webkit-transition: opacity .3s linear;" +
          "transition: opacity .3s linear;" +
          "}" +
          "#mouseflow .widget-header:hover:before {" +
          "opacity: 1;" +
          "}" +
          "#mouseflow .widget-text {" +
          "font-size: 16px;" +
          "line-height: 20px;" +
          "width: 245px;" +
          "display: inline-block;" +
          "vertical-align: middle;" +
          "}" +
          "#mouseflow .widget-toggle {" +
          "width: 20px;" +
          "display: inline-block;" +
          "vertical-align: middle;" +
          "margin: 0;" +
          "}" +
          "#mouseflow .btn-arrow," +
          "#mouseflow .btn-cross {" +
          "float: right;" +
          "z-index: 10;" +
          "line-height: .5;" +
          "}" +
          "#mouseflow .tool-toggle-icon .btn-arrow," +
          "#mouseflow .tool-toggle-icon .btn-cross {" +
          "font-size: 34px;" +
          "}" +
          "#mouseflow .widget-toggle .btn-arrow {" +
          "font-size: 25px;" +
          "}" +
          "#mouseflow .tm-tag .btn-cross {" +
          "margin: 3px 0 0 7px;" +
          "font-weight: 700;" +
          "color: #4e4e4e;" +
          "font-size: 18px;" +
          "}" +
          "#mouseflow .widget-toggle .btn-arrow:hover {" +
          "text-shadow: -3px 0 2px rgba(0, 0, 0, .5);" +
          "}" +
          "#mouseflow .tm-tag .btn-cross:hover {" +
          "color: #c66;" +
          "}" +
          "#mouseflow .btn-arrow--up {" +
          "-webkit-transform: rotate(-90deg) scale(1.5, 1.5);" +
          "-ms-transform: rotate(-90deg) scale(1.5, 1.5);" +
          "transform: rotate(-90deg) scale(1.5, 1.5);" +
          "}" +
          "#mouseflow .btn-arrow--down {" +
          "-webkit-transform: rotate(+90deg) scale(1.5, 1.5);" +
          "-ms-transform: rotate(+90deg) scale(1.5, 1.5);" +
          "transform: rotate(+90deg) scale(1.5, 1.5);" +
          "}" +
          "#mouseflow .widget-toggle .btn-arrow:before {" +
          'content: "";' +
          "display: inline;" +
          "position: absolute;" +
          "top: -185px;" +
          "left: -15px;" +
          "right: -15px;" +
          "bottom: -15px;" +
          "display: block;" +
          "}" +
          "#mouseflow .tool-toggle-icon .btn-arrow:before {" +
          'content: "";' +
          "display: inline;" +
          "position: absolute;" +
          "top: -10px;" +
          "left: -15px;" +
          "right: -15px;" +
          "bottom: -100px;" +
          "display: block;" +
          "}" +
          "#mouseflow .tool-toggle-icon .btn-cross:before {" +
          'content: "";' +
          "display: inline;" +
          "position: absolute;" +
          "top: -25px;" +
          "left: -150px;" +
          "right: -20px;" +
          "bottom: -20px;" +
          "display: block;" +
          "}" +
          "#mouseflow .btn-arrow:after {" +
          'content: "\\203a";' +
          "display: inline;" +
          "}" +
          "#mouseflow .btn-cross:after {" +
          'content: "\\00d7";' +
          "display: inline;" +
          "}" +
          "#mouseflow .btn-arrow:hover," +
          "#mouseflow .btn-cross:hover {" +
          "text-decoration: none;" +
          "}" +
          "#mouseflow .btn-widget {" +
          "width: 100%;" +
          "height: 38px;" +
          "border: none;" +
          "border-radius: 6px;" +
          "overflow: hidden;" +
          "position: relative;" +
          "z-index: 1;" +
          "cursor: pointer;" +
          "display: block;" +
          "padding: 10px;" +
          "font-size: 16px;" +
          "font-family: inherit;" +
          "font-weight: bold;" +
          "text-align: center;" +
          "outline: none;" +
          "margin-bottom: 10px;" +
          "}" +
          "#mouseflow .btn-widget:before {" +
          'content: "";' +
          "display: inline;" +
          "position: absolute;" +
          "top: 0;" +
          "left: 0;" +
          "right: 0;" +
          "bottom: 0;" +
          "background: rgba(0, 0, 0, .3);" +
          "opacity: 0;" +
          "z-index: -1;" +
          "-webkit-transition: opacity .3s linear;" +
          "transition: opacity .3s linear;" +
          "}" +
          "#mouseflow .btn-widget:hover {" +
          "text-decoration: none;" +
          "}" +
          "#mouseflow .btn-widget:hover:before {" +
          "opacity: 1;" +
          "}" +
          "#mouseflow .privacy-tool {" +
          "height: 350px;" +
          "max-height: 40%;" +
          "-webkit-transition: height .5s ease-out;" +
          "transition: height .5s ease-out;" +
          "}" +
          "#mouseflow .privacy-tool.tool-closed {" +
          "height: 0;" +
          "}" +
          "#mouseflow .tool-closed .step {" +
          "visibility: visible;" +
          "}" +
          "#mouseflow .tool-closed .tool-container {" +
          "visibility: hidden;" +
          "}" +
          "#mouseflow .step.fade-in," +
          "#mouseflow .tool-container.fade-in {" +
          "-webkit-animation: fadeUpIn .8s cubic-bezier(0, 0, 0, 1) both;" +
          "animation: fadeUpIn .8s cubic-bezier(0, 0, 0, 1) both;" +
          "}" +
          "#mouseflow .step.fade-out," +
          "#mouseflow .tool-container.fade-out {" +
          "-webkit-animation: fadeDownOut .8s cubic-bezier(0, 0, 0, 1);" +
          "animation: fadeDownOut .8s cubic-bezier(0, 0, 0, 1);" +
          "}" +
          "#mouseflow .btn-widget.loading {" +
          "cursor: default;" +
          "}" +
          "#mouseflow .btn-widget.loading:before {" +
          "display: none;" +
          "}" +
          "#mouseflow .loading i {" +
          "animation-name: blink;" +
          "animation-duration: 1.4s;" +
          "animation-iteration-count: infinite;" +
          "animation-fill-mode: both;" +
          "}" +
          "#mouseflow .loading i:nth-child(2) {" +
          "animation-delay: .2s;" +
          "}" +
          "#mouseflow .loading i:nth-child(3) {" +
          "animation-delay: .4s;" +
          "}" +
          "#mouseflow .loading i:nth-child(4) {" +
          "animation-delay: .6s;" +
          "}" +
          "#mouseflow .tool-message {" +
          "width: 100%;" +
          "height: calc(100% - 58px);" +
          "background-color: white;" +
          "color: rgb(71, 64, 62);" +
          "position: absolute;" +
          "top: 58px;" +
          "z-index: 3;" +
          "padding: 20px;" +
          "overflow-y: auto;" +
          "overflow-x: hidden;" +
          "visibility: hidden;" +
          "opacity: 0;" +
          "-webkit-animation: fadeOut .3s linear;" +
          "animation: fadeOut .3s linear;" +
          "}" +
          "#mouseflow .tool-message h3 {" +
          "margin-bottom: 20px;" +
          "}" +
          "@media (max-width: 1300px) {" +
          "#mouseflow .tool-exclude," +
          "#mouseflow .tool-whitelist," +
          "#mouseflow .tool-track {" +
          "width: 60%;" +
          "}" +
          "#mouseflow .tool-status {" +
          "width: 25%;" +
          "}" +
          "#mouseflow .tool-status-buttons {" +
          "bottom: 10px;" +
          "}" +
          "}" +
          "@media (max-width: 850px) {" +
          "#mouseflow .tool-menu-item {" +
          "height: 56px;" +
          "}" +
          "#mouseflow .tool-menu-item.active:after {" +
          "border-width: 28px;" +
          "top: 0px;" +
          "right: -56px;" +
          "}" +
          "#mouseflow .tool-status-text {" +
          "font-size: 14px;" +
          "}" +
          "#mouseflow .btn-widget {" +
          "font-size: 12px;" +
          "}" +
          "#mouseflow a.mf-tool-close {" +
          "font-size: 12px;" +
          "}" +
          "}" +
          "@media (max-height: 800px) {" +
          "#mouseflow .tool-status-text {" +
          "top: 20px;" +
          "}" +
          "#mouseflow .tool-status-buttons {" +
          "bottom: 20px;" +
          "}" +
          "}" +
          "@media (max-height: 650px) {" +
          "#mouseflow .tool-status-text {" +
          "font-size: 14px;" +
          "}" +
          "}" +
          "@media (max-width: 650px), (max-height: 600px) {" +
          "#mouseflow .tool-message {" +
          "visibility: visible;" +
          "opacity: 1;" +
          "-webkit-animation: fadeIn .3s linear;" +
          "animation: fadeIn .3s linear;" +
          "}" +
          "}" +
          "@-webkit-keyframes fadeUpIn {" +
          "0% {" +
          "-webkit-transform: translateY(50px);" +
          "-ms-transform: translateY(50px);" +
          "transform: translateY(50px);" +
          "opacity: 0;" +
          "}" +
          "100% {" +
          "-webkit-transform: translateY(0);" +
          "-ms-transform: translateY(0);" +
          "transform: translateY(0);" +
          "opacity: 1;" +
          "}" +
          "}" +
          "@keyframes fadeUpIn {" +
          "0% {" +
          "-webkit-transform: translateY(50px);" +
          "-ms-transform: translateY(50px);" +
          "transform: translateY(50px);" +
          "opacity: 0;" +
          "}" +
          "100% {" +
          "-webkit-transform: translateY(0);" +
          "-ms-transform: translateY(0);" +
          "transform: translateY(0);" +
          "opacity: 1;" +
          "}" +
          "}" +
          "@-webkit-keyframes fadeDownOut {" +
          "0% {" +
          "visibility: visible;" +
          "-webkit-transform: translateY(0);" +
          "-ms-transform: translateY(0);" +
          "transform: translateY(0);" +
          "opacity: 1;" +
          "}" +
          "100% {" +
          "visibility: hidden;" +
          "-webkit-transform: translateY(50px);" +
          "-ms-transform: translateY(50px);" +
          "transform: translateY(50px);" +
          "opacity: 0;" +
          "}" +
          "}" +
          "@keyframes fadeDownOut {" +
          "0% {" +
          "visibility: visible;" +
          "-webkit-transform: translateY(0);" +
          "-ms-transform: translateY(0);" +
          "transform: translateY(0);" +
          "opacity: 1;" +
          "}" +
          "100% {" +
          "visibility: hidden;" +
          "-webkit-transform: translateY(50px);" +
          "-ms-transform: translateY(50px);" +
          "transform: translateY(50px);" +
          "opacity: 0;" +
          "}" +
          "}" +
          "@-webkit-keyframes fadeIn {" +
          "0% {" +
          "visibility: visible;" +
          "opacity: 0;" +
          "}" +
          "100% {" +
          "visibility: visible;" +
          "opacity: 1;" +
          "}" +
          "}" +
          "@keyframes fadeIn {" +
          "0% {" +
          "visibility: visible;" +
          "opacity: 0;" +
          "}" +
          "100% {" +
          "visibility: visible;" +
          "opacity: 1;" +
          "}" +
          "}" +
          "@-webkit-keyframes fadeOut {" +
          "0% {" +
          "visibility: visible;" +
          "opacity: 1;" +
          "}" +
          "100% {" +
          "visibility: hidden;" +
          "opacity: 0;" +
          "}" +
          "}" +
          "@keyframes fadeOut {" +
          "0% {" +
          "visibility: visible;" +
          "opacity: 1;" +
          "}" +
          "100% {" +
          "visibility: hidden;" +
          "opacity: 0;" +
          "}" +
          "}" +
          "@keyframes blink {" +
          "0% {" +
          "opacity: .2;" +
          "}" +
          "20% {" +
          "opacity: 1;" +
          "}" +
          "100% {" +
          "opacity: .2;" +
          "}" +
          "}"
        );
      }
      this._42 = _42;
      this._64 = _64;
    }
    function _713(_7, _400, _395) {
      function _234() {
        var _61 = (_7.path || _7.location.pathname).toLowerCase();
        var _194 = _7.location.search.toLowerCase();
        if (_61 !== "/" && _61.slice(-1) === "/") _61 = _61.slice(0, -1);
        return _841(_61) || _61 + _859(_194);
      }
      function _841(_61) {
        return _400
          .filter(function (_62) {
            return _856(_61, _62);
          })
          .map(function (_62) {
            return _855(_61, _62);
          })[0];
      }
      function _859(_194) {
        if (_194[0] === "?") _194 = _194.slice(1);
        var _117;
        var _425 = [];
        var _857 = /([^&=]+)=?([^&]*)/g;
        while ((_117 = _857.exec(_194))) {
          var _50 = _395.indexOf(_117[1]);
          if (_117[2] && _50 > -1) _425[_50] = _117[0];
        }
        return _425.length ? "?" + _425.filter(hasValue).join("&") : "";
      }
      function _856(_61, _62) {
        var _488 = _61.indexOf("?");
        if (_488 > -1) _61 = _61.slice(0, _488);
        switch (_62._20) {
          case "equals":
            return _61 === _62._4.toLowerCase();
          case "startsWith":
            return _61.substr(0, _62._4.length) === _62._4;
          case "endsWith":
            return _61.substr(-_62._4.length) === _62._4;
          case "regex":
            return new RegExp(_62._4).test(_61);
          default:
            return false;
        }
      }
      function _855(_61, _62) {
        if (_62._854) return _62._854;
        switch (_62._20) {
          case "startsWith":
            return _62._4 + "*";
          case "endsWith":
            return "*" + _62._4;
          default:
            return _62._4;
        }
      }
      function hasValue(value) {
        return value;
      }
      this._234 = _234;
    }
    function _708(_9) {
      var _408 = [];
      function _673(_44, _5, _86, _411, _16) {
        var _33 = !!_16._33;
        var _495 = function (_6) {
          if (_86) {
            _6.delegatedTarget = _498(_6.target, _86);
            if (!_6.delegatedTarget && !_16._490) return;
            if (_16._191 && _6.target !== _6.delegatedTarget) return;
          } else if (_16._191 && _6.target !== _44) {
            return;
          }
          if (_16._90) _6.preventDefault();
          if (_16._904) _6.stopPropagation();
          _411.apply(this, arguments);
        };
        _44.addEventListener(_5, _495, { capture: _33 });
        _408.push({ _44: _44, _5: _5, _411: _495, _33: _33 });
      }
      function _672() {
        _408.forEach(function (_18) {
          _18._44.removeEventListener(_18._5, _18._411, { capture: _18._33 });
        });
        _408 = [];
      }
      function _498(_44, _86) {
        if (!_86) return null;
        if (_9._66(_44, _86)) return _44;
        if (!_44.parentNode) return null;
        return _498(_44.parentNode, _86);
      }
      this._24 = function (_44, _5, _86, _141, _16) {
        if (typeof _86 === "function") {
          _16 = _141;
          _141 = _86;
          _86 = null;
        }
        _673(_44, _5, _86, _141, _16 || {});
      };
      this._487 = _672;
    }
    function _555(_7, _9) {
      function _416(_140) {
        if (!_140 || !_140.length) return true;
        _140 = _140.filter(function (_72) {
          return _72 && _72._20 && _72._4;
        });
        var _486 = _140.filter(function (_72) {
          return _72._20.indexOf("not") !== 0;
        });
        var _642 =
          _486.length === 0 ||
          _486.some(function (_72) {
            return _166(_72);
          });
        var _484 = _140.filter(function (_72) {
          return _72._20.indexOf("not") === 0;
        });
        var _676 =
          _484.length === 0 ||
          _484.every(function (_72) {
            return _166(_72);
          });
        return _676 && _642;
      }
      function _166(_72) {
        var _28 = _7.path || _7.location.pathname;
        var _20 = _72._20 || "";
        var _4 = _72._4 || "";
        switch (_20.toLowerCase()) {
          case "equals":
            _28 = _9._183(_28, "/").toLowerCase();
            _4 = _9._183(_4, "/").toLowerCase();
            return _28 === _4;
          case "startswith":
            _28 = _28.toLowerCase();
            _4 = _4.toLowerCase();
            return _28.substr(0, _4.length) === _4;
          case "endswith":
            _28 = _9._183(_28, "/").toLowerCase();
            _4 = _9._183(_4, "/").toLowerCase();
            return _28.substr(-_4.length) === _4;
          case "regex":
            return new RegExp(_4).test(_28);
          case "notequals":
          case "notstartswith":
          case "notendswith":
            return !_166({ _20: _20.slice(3), _4: _4 });
          default:
            return true;
        }
      }
      this._416 = _416;
      this._166 = _166;
    }
    function _644(_2, _380, _382) {
      var _88 = _2.location;
      function _476(_17) {
        var _66 = (_17 || "").match(
          /^(([^:]+:)?\/?\/?(([^:\/\?#]+)?:?(\d+)?))(\/.*?)?(\?.*?)?(#.*)?$/
        );
        return {
          href: _66[0] || "",
          origin: _66[1] || "",
          protocol: _66[2] || "",
          host: _66[3] || "",
          hostname: _66[4] || "",
          port: _66[5] || "",
          pathname: _66[6] || "",
          search: _66[7] || "",
          hash: _66[8] || "",
        };
      }
      function _677() {
        try {
          _2.localStorage.setItem("mf_supportsLocalStorage", "1");
          var _646 = _2.localStorage.getItem("mf_supportsLocalStorage") === "1";
          _2.localStorage.removeItem("mf_supportsLocalStorage");
          return _646;
        } catch (e) {
          return false;
        }
      }
      this.debug = _2.mouseflowDebug || _88.search.indexOf("mf_debug=1") !== -1;
      this.includeDebugTime = false;
      this.forceStart = _88.search.indexOf("mf_force=1") !== -1;
      this.autoStart =
        _2.mouseflowAutoStart !== false &&
        _88.search.indexOf("mf_autostart=0") === -1;
      this.enableBots = false;
      this.touchEvents = !_2.mouseflowDisableTouch;
      this.htmlDelay = _2.mouseflowHtmlDelay || 1000;
      this.newPageViewHtmlDelay = _2.mouseflowNewPageViewHtmlDelay || 500;
      this.compress =
        _2.mouseflowCompress !== false &&
        _88.search.indexOf("mf_compress=0") === -1;
      this.autoTagging = _2.mouseflowAutoTagging !== false;
      this.path = _2.mouseflowPath;
      this.crossDomainSupport = !!_2.mouseflowCrossDomainSupport;
      this.location = _476(_2.mouseflowHref || _88.href);
      this.htmlFetchMode = _2.mouseflowHtmlFetchMode || "post";
      this.sessionId = _2.mouseflowSessionId;
      this.honorDoNotTrack = _2.mouseflowHonorDoNotTrack || _382;
      this.gdprEnabled = _2.mouseflowForceGdpr || _380;
      this.keyLogging = !_2.mouseflowDisableKeyLogging && !this.gdprEnabled;
      this.domReuse = !_2.mouseflowDisableDomReuse;
      this.domDeduplicator = !_2.mouseflowDisableDomDeduplicator;
      this.includeSubDomains = !_2.mouseflowExcludeSubDomains;
      this.registerSubmitTimeout = _2.mouseflowRegisterSubmitTimeout || 2000;
      this.useUnload = !!_2.mouseflowUseUnload;
      this.replaceLastFormValues =
        _2.mouseflowReplaceLastFormValues ||
        !this.keyLogging ||
        this.gdprEnabled;
      this.useAllHoverSelectors = !!_2.mouseflowUseAllHoverSelectors;
      this.enableCssRecording = !!_2.mouseflowEnableCssRecording;
      this.secureCookie = !!_2.mouseflowSecureCookie;
      this.preferStorageApi = !!_2.mouseflowPreferStorageApi;
      this.domMutationDetectorEnable =
        _2.domMutationDetectorEnable !== undefined
          ? _2.domMutationDetectorEnable
          : false;
      this.domMutationUseParentNode =
        _2.domMutationUseParentNode !== undefined
          ? _2.domMutationUseParentNode
          : true;
      this.domMutationUsePreviousSibling =
        _2.domMutationUsePreviousSibling !== undefined
          ? _2.domMutationUsePreviousSibling
          : false;
      this.domMutationCountThreshold =
        _2.domMutationCountThreshold !== undefined
          ? _2.domMutationCountThreshold
          : 20;
      this.domMutationTimeThresholdInSeconds =
        _2.domMutationTimeThresholdInSeconds !== undefined
          ? _2.domMutationTimeThresholdInSeconds
          : 10;
      this.liveHeatmapsEnabled = false;
      this.privacyToolEnabled = false;
      this.useIdSelectors =
        _2.mouseflowUseIdSelectors !== undefined
          ? _2.mouseflowUseIdSelectors
          : true;
      this.proxyAttachShadow = true;
      this._729 = function () {
        if (!!_2.opener && _88.search.indexOf("mf_liveHeatmaps") !== -1) {
          this.liveHeatmapsEnabled = true;
          return;
        }
        if (_88.search.indexOf("mf_inspect") !== -1) {
          this.privacyToolEnabled = true;
          return;
        }
        if (
          !!_2.opener &&
          typeof _2.name === "string" &&
          _2.name.indexOf("mf_liveHeatmaps") === 0
        ) {
          this.liveHeatmapsEnabled = true;
          return;
        }
        if (_2.name === "mf_privacyTool") {
          this.privacyToolEnabled = true;
          return;
        }
        if (!_677()) return;
        if (_2.opener) {
          if (_2.localStorage.getItem("mf_privacyTool"))
            this.privacyToolEnabled = true;
          else if (_2.localStorage.getItem("mf_liveHeatmaps"))
            this.liveHeatmapsEnabled = true;
        }
      };
      this._729();
      this._575 = function (_26, _4) {
        switch (_26) {
          case "href":
            this.location = _476(_4);
            break;
          case "keyLogging":
            this.keyLogging = this.keyLogging && _4;
            break;
          case "gdprEnabled":
            this.gdprEnabled = this.gdprEnabled || _4;
            break;
          case "_cssSelectorBlackList":
            break;
          case "_cssSelectorWhiteList":
            break;
          case "_cssSelectorTracked":
            break;
          case "_websiteId":
            break;
          default:
            this[_26] = _4;
            break;
        }
      };
    }
    function _730(_2) {
      var _11 = _2.document,
        _172;
      function _260() {
        if (_11.body && !_172) {
          _172 = _712();
          _11.body.appendChild(_172);
        }
        return _172;
      }
      function _394() {
        if (_172) {
          _11.body.removeChild(_172);
          _172 = undefined;
        }
      }
      function _712() {
        var _30 = _11.createElement("div");
        _30.id = "mouseflow";
        var _171 = _11.createElement("style");
        _171.type = "text/css";
        _171.innerHTML = _716();
        var _392 = _11.createElement("div");
        _392.className = "load-font";
        _392.innerHTML = "load font";
        _30.appendChild(_171);
        _30.appendChild(_392);
        return _30;
      }
      function _716() {
        return (
          "@font-face {" +
          'font-family: "Droid Sans";' +
          "font-style: normal;" +
          "font-weight: 400;" +
          'src: local("Droid Sans Regular"), local("DroidSans-Regular"), url(https://fonts.gstatic.com/s/droidsans/v8/s-BiyweUPV0v-yRb-cjciPk_vArhqVIZ0nv9q090hN8.woff2) format("woff2");' +
          "unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;" +
          "}" +
          "#mouseflow :before, #mouseflow :after {" +
          "display: none;" +
          "}" +
          "#mouseflow," +
          "#mouseflow * {" +
          "background: transparent;" +
          "border: 0;" +
          "border-image-outset: 0s;" +
          "border-image-repeat: stretch;" +
          "border-image-slice: 100%;" +
          "border-image-source: none;" +
          "border-image-width: 1;" +
          "border-color: #000;" +
          "border-radius: 0;" +
          "border-width: 0;" +
          "border-style: none;" +
          "box-sizing: border-box;" +
          "clip: auto;" +
          "float: none;" +
          "color: inherit;" +
          "font-family: inherit;" +
          "font-size: inherit;" +
          "font-style: inherit;" +
          "font-weight: inherit;" +
          "width: auto;" +
          "height: auto;" +
          "min-width: auto;" +
          "min-height: auto;" +
          "max-width: auto;" +
          "max-height: auto;" +
          "letter-spacing: normal;" +
          "line-height: normal;" +
          "margin: 0;" +
          "padding: 0;" +
          "text-decoration: none;" +
          "text-indent: 0;" +
          "text-transform: none;" +
          "vertical-align: baseline;" +
          "text-align: left;" +
          "overflow: visible;" +
          "top: auto;" +
          "right: auto;" +
          "bottom: auto;" +
          "left: auto;" +
          "-webkit-transition: none;" +
          "transition: none;" +
          "}" +
          "#mouseflow {" +
          'font: 400 14px/1.4 "Droid Sans", Helvetica, Arial, sans-serif;' +
          "color: #666;" +
          "}" +
          "#mouseflow .load-font {" +
          "position: absolute;" +
          "visibility: hidden;" +
          "width: 0px;" +
          "height: 0px;" +
          "overflow: hidden;" +
          "}"
        );
      }
      this._260 = _260;
      this._394 = _394;
    }
    function _671(_2) {
      this._53 = function () {
        return _258("setTimeout").apply(_2, arguments);
      };
      this._257 = function () {
        return _258("setInterval").apply(_2, arguments);
      };
      this._112 = function () {
        _258("clearTimeout").apply(_2, arguments);
      };
      this._152 = function () {
        _258("clearInterval").apply(_2, arguments);
      };
      function _258(_19) {
        var _534;
        if (_2.Zone && _2.Zone.__symbol__) _534 = _2[_2.Zone.__symbol__(_19)];
        return _534 || _2[_19];
      }
    }
    function _657(_2, _105, _418) {
      var _11 = _2.document;
      function _124(_3, _70) {
        var _84 = _3.classList;
        if (_84 && _70) return _84.contains(_70);
        var _127 = _159(_3);
        return _127.indexOf(_70) !== -1;
      }
      function _58(_3, _70) {
        var _84 = _3.classList;
        if (_84 && _70) {
          _3.classList.add(_70);
          return;
        }
        var _127 = _159(_3);
        if (_127.indexOf(_70) === -1) _127.push(_70);
        _3.className = _127.join(" ");
      }
      function _40(_3, _70) {
        var _84 = _3.classList;
        if (_84 && _70) {
          _3.classList.remove(_70);
          return;
        }
        var _127 = _159(_3);
        var _50 = _127.indexOf(_70);
        if (_50 !== -1) _127.splice(_50, 1);
        _3.className = _127.join(" ");
      }
      function _231(_3, _70, _397) {
        if (_397 === undefined) _397 = !_124(_3, _70);
        if (_397) {
          _58(_3, _70);
        } else {
          _40(_3, _70);
        }
      }
      function _159(_3) {
        var _532 =
          typeof _3.className === "string"
            ? _3.className.replace(/\s+/g, " ").trim()
            : "";
        return _532 !== "" ? _532.split(" ") : [];
      }
      function _388() {
        return _105.max(
          (_11.body || {}).scrollHeight || 0,
          (_11.body || {}).offsetHeight || 0,
          _11.documentElement.scrollHeight || 0,
          _11.documentElement.offsetHeight || 0,
          _11.documentElement.clientHeight || 0
        );
      }
      function _86(_37, _727) {
        var _32 = [];
        if (!_37) return _32;
        for (var _1 = 0; _1 < _37.length; _1++) {
          if (_727(_37[_1], _1)) _32.push(_37[_1]);
        }
        return _32;
      }
      function _467(_246) {
        var _254 = _246.length;
        while (_254) {
          var _1 = _105.floor(_105.random() * _254--);
          var _704 = _246[_254];
          _246[_254] = _246[_1];
          _246[_1] = _704;
        }
      }
      function _145(_34) {
        if (!_34) return _34;
        return _34
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function _386(_34) {
        if (!_34) return _34;
        return _34
          .replace(/&amp;/g, "&")
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">");
      }
      function _419(url) {
        return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(
          url.trim()
        );
      }
      function _452(_34) {
        return _34.replace(
          /\[([^\]]+)\]\(([^\)]+)\)/g,
          function (_117, _700, _17) {
            _17 = _386(_17);
            return _419(_17)
              ? '<a href="' + _17 + '" target="_blank">' + _700 + "</a>"
              : _117;
          }
        );
      }
      function _139(_4) {
        if (!_4) return _4;
        return _4
          .replace(/([^a-zA-Z\d-_])/g, "\\$1")
          .replace(/^(-)?(\d)/, "$1\\3$2 ");
      }
      function _146(_4) {
        return _4 ? _418.parse(_4) : undefined;
      }
      function _69(_4) {
        var _32;
        if (Array.prototype.toJSON) {
          var _701 = Array.prototype.toJSON;
          delete Array.prototype.toJSON;
          _32 = _418.stringify(_4);
          Array.prototype.toJSON = _701;
        } else if (_4) {
          _32 = _418.stringify(_4);
        }
        return _32;
      }
      function _537(_695, _682) {
        var _196 = _253(_695);
        var _34 = _253(_682);
        var _267 = _105.max(_196.length, _34.length);
        if (_34 == "NaN" || _196 == "NaN") {
          return false;
        }
        for (var _1 = 0; _1 < _267; _1++) {
          _196[_1] = _196[_1] || 0;
          _34[_1] = _34[_1] || 0;
          if (_196[_1] == _34[_1]) {
            continue;
          }
          return _196[_1] > _34[_1];
        }
        return true;
      }
      function _253(_690) {
        var _442 = _690.split(".");
        var _464 = [];
        for (var _1 = 0; _1 < _442.length; _1++) {
          _464.push(parseInt(_442[_1]));
        }
        return _464;
      }
      function _183(_34, _725) {
        var _32 = _34;
        while (_32[_32.length - 1] === (_725 || " ")) _32 = _32.slice(0, -1);
        return _32;
      }
      function _66(_3, _8) {
        if (_3.nodeType !== 1) return false;
        if (_3.msMatchesSelector) return _3.msMatchesSelector(_8);
        if (_3.matches) return _3.matches(_8);
        return false;
      }
      function _144(_57, _390) {
        return (
          _57.parentNode &&
          _57.parentNode.hasAttribute &&
          _57.parentNode.hasAttribute(_390)
        );
      }
      this._124 = _124;
      this._58 = _58;
      this._40 = _40;
      this._231 = _231;
      this._159 = _159;
      this._388 = _388;
      this._86 = _86;
      this._467 = _467;
      this._145 = _145;
      this._386 = _386;
      this._419 = _419;
      this._452 = _452;
      this._139 = _139;
      this._146 = _146;
      this._69 = _69;
      this._537 = _537;
      this._253 = _253;
      this._183 = _183;
      this._66 = _66;
      this._144 = _144;
    }
    var _109 = new _730(window);
    var _23 = new _671(window);
    var _9 = new _657(window, Math, JSON);
    var _18 = new _708(_9);
    var _170 = new _713(_7, _400, _395);
    var _226 =
      typeof _555 === "function" ? new _555(_7, _9) : { _166: function () {} };
    var _125 =
      typeof _683 === "function"
        ? new _683(window, _7, _109, _23, _9, _226, _18)
        : {
            _42: function () {},
            _64: function () {},
            _393: function () {},
            _905: function () {},
            _401: function () {},
          };
    var _387 =
      typeof _543 === "function" ? new _543(_7) : { _143: function () {} };
    function _10(_115, _14) {
      _14 = typeof _14 !== "undefined" ? _14 : "";
      if (_7.debug)
        console.log(
          "MF" + (_7.includeDebugTime ? " - " + _14 : "") + ": " + _115
        );
    }
    var _600 = new _714(window, _109, _23, _9, _18, _7);
    var _289 = new _709(window, _7, _109, _9, _18, _170);
    function _94() {
      return undefined;
    }
    function _598() {
      return null;
    }
    function _597() {
      return false;
    }
    var shouldRecord = false;
    if (_7.privacyToolEnabled) {
      _600._42(_142, _7._43, _7._229, _7._228, _7._301, _10);
    } else if (_7.liveHeatmapsEnabled) {
      _289._42(_7._43, _10);
    } else if (typeof _601 === "function") {
      window.mouseflow = new _601(
        window,
        Math,
        _7,
        _23,
        _9,
        _226,
        _18,
        _170,
        _125,
        _387,
        _10
      );
      shouldRecord = true;
    }
    if (!shouldRecord) {
      window.mouseflow = {
        start: _94,
        stop: function () {
          if (_7.privacyToolEnabled) _600._64();
          else if (_7.liveHeatmapsEnabled) _289._64();
        },
        newPageView: function (_28) {
          if (_7.liveHeatmapsEnabled) _289._593({ url: _28 });
        },
        stopSession: _94,
        getSessionId: _598,
        getPageViewId: _598,
        tag: _94,
        star: _94,
        setVariable: _94,
        identify: _94,
        formSubmitAttempt: _94,
        formSubmitSuccess: _94,
        formSubmitFailure: _94,
        addFriction: _94,
        isRecording: _597,
        isReturningUser: _597,
        activateFeedback: _94,
        proxyAttachShadow: _94,
        recordingRate: null,
        version: null,
      };
    }
    window.mouseflow.websiteId = _7._43;
    window.mouseflow.gdprEnabled = _7.gdprEnabled;
    window.mouseflow.updateHeatmap = _289._593;
    window.mouseflow.config = function () {
      _7._575.apply(_7, arguments);
    };
    window.mouseflow.debug = function () {
      _7.debug = !_7.debug;
      console.log("MF: Debugging " + (_7.debug ? "enabled" : "disabled"));
    };
  })();
}
