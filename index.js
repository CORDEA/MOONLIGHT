/**
 *
 * Copyright [2015] [Yoshihiro Tanaka]
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Yoshihiro Tanaka <contact@cordea.jp>
 * date  : 2015-08-23
 */

function match() {
    console.log("match");
    var target = document.getElementById('display').innerHTML;
    console.log(target);
    if (target && target.length !== 0) {
        target = target.replace('<p id="light">', '');
        target = target.replace('</p>', '');

        var regex = target.match(new RegExp(document.getElementById('form').getElementsByTagName('input')[0].value, "g")); 
        for (var s in regex) {
            if (regex[s].length !== 0) {
                target = target.replace(regex[s], '<p id="light">' + regex[s] + '</p>');
            }
        }
        document.getElementById('display').innerHTML = target;
    }
}

function inputText() {
    textCore(document.getElementById('text').value);
}

function pasteText(elem, e) {
    var target;
    if (e && e.clipboardData && e.clipboardData.getData) {
        target = e.clipboardData.getData('text/plain');
    }
    if (window.clipboardData && window.clipboardData.getData) {
        target = window.clipboardData.getData('Text');
    }
    textCore(target);
}

function textCore(target) {
    document.getElementById("target").style.display = 'none';
    var disp = document.getElementById('display');

    disp.innerHTML = target;
    disp.style.display = 'table-cell';
}
