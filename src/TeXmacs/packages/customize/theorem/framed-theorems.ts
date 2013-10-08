<TeXmacs|1.0.7.20>

<style|source>

<\body>
  <active*|<\src-title>
    <src-package|framed-theorems|1.0>

    <\src-purpose>
      A style package for ornamented theorems.
    </src-purpose>

    <src-copyright|2013|Joris van der Hoeven>

    <\src-license>
      This software falls under the <hlink|GNU general public license,
      version 3 or later|$TEXMACS_PATH/LICENSE>. It comes WITHOUT ANY
      WARRANTY WHATSOEVER. You should have received a copy of the license
      which the software. If not, see <hlink|http://www.gnu.org/licenses/gpl-3.0.html|http://www.gnu.org/licenses/gpl-3.0.html>.
    </src-license>
  </src-title>>

  <\active*>
    <\src-comment>
      Extra style parameters
    </src-comment>
  </active*>

  <assign|frame-titles|<unequal|<value|ornament-color>|>>

  <drd-props|frame-titles|parameter|boolean>

  <\active*>
    <\src-comment>
      Framed theorems
    </src-comment>
  </active*>

  <assign|unframed-render-enunciation|<value|render-enunciation>>

  <assign|framed-render-enunciation|<\macro|which|body>
    <\ornament>
      <\unframed-render-enunciation|<arg|which>>
        <arg|body>
      </unframed-render-enunciation>
    </ornament>
  </macro>>

  <assign|enunciation-title-name|<macro|which|<with|color|<value|bg-color>|strong-color|<value|bg-color>|<enunciation-name|<arg|which>>>>>

  <assign|framed-render-enunciation*|<\macro|which|body>
    <\with|enunciation-sep|>
      <\ornament>
        <\surround||<right-flush>>
          <arg|body>
        </surround>
      </ornament|<enunciation-title-name|<arg|which>>>
    </with>
  </macro>>

  <assign|render-enunciation|<\macro|which|body>
    <\with|dummy|<ornament|>>
      <compound|<if|<value|frame-titles>|framed-render-enunciation*|framed-render-enunciation>|<arg|which>|<arg|body>>
    </with>
  </macro>>
</body>

<\initial>
  <\collection>
    <associate|preamble|true>
  </collection>
</initial>