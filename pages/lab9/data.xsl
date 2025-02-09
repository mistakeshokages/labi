<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <title>Фітнес-центр</title>
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
          }
          table, th, td {
            border: 1px solid black;
          }
          th, td {
            padding: 10px;
            text-align: left;
          }
        </style>
      </head>
      <body>
        <h1>Список послуг фітнес-центру</h1>

        <h2>Сортування за вартістю</h2>
        <table>
          <tr>
            <th>Тип послуги</th>
            <th>Вартість</th>
            <th>Інструктор</th>
            <th>Графік</th>
          </tr>
          <xsl:for-each select="fitness_center/service">
            <xsl:sort select="cost" data-type="number" order="ascending"/>
            <tr>
              <td><xsl:value-of select="type"/></td>
              <td><xsl:value-of select="cost"/></td>
              <td>
                <xsl:value-of select="instructor/surname"/> 
                <xsl:value-of select="instructor/name"/> 
                <xsl:value-of select="instructor/patronymic"/>
              </td>
              <td>
                <xsl:for-each select="schedule">
                  <xsl:value-of select="day"/>:
                  <xsl:value-of select="time"/>
                  <xsl:text> </xsl:text>
                </xsl:for-each>
              </td>
            </tr>
          </xsl:for-each>
        </table>

        <h2>Фільтрація за типом послуги (Йога)</h2>
        <table>
          <tr>
            <th>Тип послуги</th>
            <th>Вартість</th>
            <th>Інструктор</th>
            <th>Графік</th>
          </tr>
          <xsl:for-each select="fitness_center/service[type='Йога']">
            <tr>
              <td><xsl:value-of select="type"/></td>
              <td><xsl:value-of select="cost"/></td>
              <td>
                <xsl:value-of select="instructor/surname"/> 
                <xsl:value-of select="instructor/name"/> 
                <xsl:value-of select="instructor/patronymic"/>
              </td>
              <td>
                <xsl:for-each select="schedule">
                  <xsl:value-of select="day"/>:
                  <xsl:value-of select="time"/>
                  <xsl:text> </xsl:text>
                </xsl:for-each>
              </td>
            </tr>
          </xsl:for-each>
        </table>

        <h2>Загальний список послуг</h2>
        <table>
          <tr>
            <th>Тип послуги</th>
            <th>Вартість</th>
            <th>Інструктор</th>
            <th>Графік</th>
          </tr>
          <xsl:for-each select="fitness_center/service">
            <tr>
              <td><xsl:value-of select="type"/></td>
              <td><xsl:value-of select="cost"/></td>
              <td>
                <xsl:value-of select="instructor/surname"/> 
                <xsl:value-of select="instructor/name"/> 
                <xsl:value-of select="instructor/patronymic"/>
              </td>
              <td>
                <xsl:for-each select="schedule">
                  <xsl:value-of select="day"/>:
                  <xsl:value-of select="time"/>
                  <xsl:text> </xsl:text>
                </xsl:for-each>
              </td>
            </tr>
          </xsl:for-each>
        </table>

      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
