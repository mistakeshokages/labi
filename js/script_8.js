const data = {
    dtd: 
    `<!DOCTYPE fitness_center [
    <!ELEMENT fitness_center (service+)>

    <!ELEMENT service (type, cost, instructor, schedule+)>
    <!ATTLIST service id ID #REQUIRED>

    <!ELEMENT type (#PCDATA)>
    <!ELEMENT cost (#PCDATA)>

    <!ELEMENT instructor (surname, name, patronymic, education)>
    <!ELEMENT surname (#PCDATA)>
    <!ELEMENT name (#PCDATA)>
    <!ELEMENT patronymic (#PCDATA)>
    <!ELEMENT education (#PCDATA)>

    <!ELEMENT schedule (day, time+)>
    <!ELEMENT day (#PCDATA)>
    <!ELEMENT time (#PCDATA)>
    
    ]>`
,
    
    xsd: `
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

<xs:element name="fitness_center">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="service" maxOccurs="unbounded">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="type" type="xs:string"/>
            <xs:element name="cost" type="xs:int"/>
            <xs:element name="instructor">
              <xs:complexType>
                <xs:sequence>
                  <xs:element name="surname" type="xs:string"/>
                  <xs:element name="name" type="xs:string"/>
                  <xs:element name="patronymic" type="xs:string"/>
                  <xs:element name="education" type="xs:string"/>
                </xs:sequence>
              </xs:complexType>
            </xs:element>
            <xs:element name="schedule" maxOccurs="unbounded">
              <xs:complexType>
                <xs:sequence>
                  <xs:element name="day" type="xs:string"/>
                  <xs:element name="time" type="xs:string"/>
                </xs:sequence>
              </xs:complexType>
            </xs:element>
          </xs:sequence>
        </xs:complexType>
      </xs:element>
    </xs:sequence>
  </xs:complexType>
</xs:element>

</xs:schema>
`
  };